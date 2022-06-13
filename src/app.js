var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const erroMiddleware = require('./middleware/erroMiddleware')
const database = require('./database')
const dotenv = require('dotenv')

var indexRouter = require('./routes/index');
var users = require('./routes/users');
let produtos = require('./routes/produtos');

var app = express();
dotenv.config({path: 'config/config.env'})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
	session({
	  resave: true,
	  saveUninitialized: true,
	  secret: 'palavraSecreta',
	  cookie: {maxAge: 100 * 60 * 60 * 24}
	})
  )

app.use('/', indexRouter);
app.use('/users', users);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(erroMiddleware)

module.exports = app;
