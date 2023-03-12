const Login = require('../models/LoginModel');

exports.render = (req, res) => {
  if(req.session.user) return res.redirect('/');
  res.render('login');
}

exports.login = async function(req, res) {
  try {
    const login = new Login(req.body);
    await login.login();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(() => res.redirect('/login'));
      return;
    }

    req.flash('success', `Bem vindo, ${login.user.username}!`);
    req.session.user = login.user;
    req.session.save(function() {
      return res.redirect('/');
    });
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
}

exports.register = async (req, res) => {
  try{
      const login = new Login(req.body);
      await login.register();

      const initialForm = "register";
  
      if(login.errors.length > 0){
          req.flash('errors', login.errors);
          req.session.save(function() {
              return res.redirect('/login');
            });
          return;
      }

      req.flash('success', 'Seu usuário foi criado com sucesso.');
     
      req.session.save(function() {
          return res.redirect('/login');
      });

  } catch (err){
    console.log(err);
    return res.render('404');
  }
}

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
}

exports.forgot = (req, res) => {
  res.render('forgot-password');
}