const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email : {type: String, required: true},
  password : {type: String, required: true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    };

    async login(){

        this.validate();
        if(this.errors.length > 0) return;

        this.user = await LoginModel.findOne({username: this.body.username});

        if(!this.user) {
            this.errors.push('Usuário ou senha incorretos.');
            return;
        };

        if(!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push('Usuário ou senha incorretos.');
            this.user = null;
            return;
        };

    }


    async register(){

      const invalidChars = /[^a-zA-Z0-9_.]/;
      if(invalidChars.test(this.body.username)){
        this.errors.push('O nome de usuário pode conter apenas letras, números, pontos e underlines.');
      };
      if(this.errors.length > 0) return;

        this.validate();
        if(this.errors.length > 0) return;

        await this.userExists();
        if(this.errors.length > 0) return;
        
        await this.emailExists();
        if(this.errors.length > 0) return;

        await this.passwordMatch();
        if(this.errors.length > 0) return;
       


        const salt = await bcryptjs.genSaltSync();
        this.body.password = await bcryptjs.hashSync(this.body.password, salt);

      
        this.user = await LoginModel.create(this.body);
           
    };

    async emailExists(){
        this.user = await LoginModel.findOne({email: this.body.email});
        if(this.user) this.errors.push('E-mail já cadastrado.');
    };

    async userExists(){
        this.user = await LoginModel.findOne({username: this.body.username});
        if(this.user) this.errors.push('Usuário já cadastrado.');
    };

    validate(){
        this.cleanUp();

        if(this.body.username){
          if(this.body.username.length < 5){
            this.errors.push('O nome de usuário precisa ter pelo menos 5 caracteres.');
          };
        }

        if(this.body.email){
          if(!validator.isEmail(this.body.email)){
               this.errors.push('E-mail inválido.');
          };
        }

        if(this.body.password.length < 5 || this.body.password.length > 31){
            this.errors.push('A senha precisa ter entre 6 e 30 caracteres.');
        };


    };

    passwordMatch(){
        if(this.body.password !== this.body.passwordConfirm){
            this.errors.push('As senhas devem ser iguais.');
        };
    };

    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            };
        };

        this.body = {
            username: this.body.username,
            email: this.body.email,
            password: this.body.password,
            passwordConfirm: this.body.passwordConfirm
        };
    };

};

module.exports = Login;