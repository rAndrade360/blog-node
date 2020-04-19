const express = require('express');
const App = express();
const handlebars = require('express-handlebars');
const admin = require('./routes/admin')
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

App.use(express.json());
App.use(express.urlencoded({extended: true}));

//SESSION
App.use(session({
    secret: 'minhachave',
    resave: false,
    saveUninitialized: true,
}))

App.use(flash());

//Middlewares

App.use((req, res, next)=>{
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
})

App.engine('handlebars', handlebars({defaultLayout: 'main', layoutsDir: path.resolve(__dirname, 'views', 'layouts'), partialsDir: path.resolve(__dirname, 'views', 'partials')}));
App.set('views', path.resolve(__dirname, 'views'));
App.set('view engine', 'handlebars');
//Public
App.use(express.static(path.join(__dirname, 'public')));


App.use('/admin', admin);

App.listen(3333);