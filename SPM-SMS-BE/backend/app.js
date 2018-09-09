var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const router  = require('./Rout/routercontroll');
const cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var routes = require('./Routes');
var app = express();

/**
 * view engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cors());

/**
 * create mongodb connection
 */
mongoose.connect('mongodb://localhost:27017/sms');
mongoose.Promise=global.Promise;

app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * initialize routing
 */
require('./routes/users.routes')(app);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/',routes);
app.use('/',router);

/**
 * handle errors
 */
app.use(function(req, res, next) {
  next(createError(404));
});

/**
 * server initialization
 */
app.listen(8000,(res,error)=>{
	if(error){
		console.log("Error");
	}
	else{
		console.log("server listening on port 8000..");
	}
})

/**
 * error handling
 */
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
