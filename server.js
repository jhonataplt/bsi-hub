require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('ready')
    })
    .catch((err) => { console.log('Error in MongoDB: ' + err) });

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const path = require('path');
const routes = require('./routes');
const helmet = require('helmet');
const csrf = require('csurf');

const sessionOptions = session({
    secret: 'anything',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        httpOnly: true
    }
});


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname)));



app.use(sessionOptions);
app.use(flash());
app.use(helmet());
app.use(csrf());

const { globalMiddleware, themeMiddleware } = require('./src/middlewares/middleware');

app.use(globalMiddleware);

app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Access http://localhost:3000');
        console.log('Server running on port 3000');
    });
});