const createError = require('http-errors');
const express = require('express');
const path = require('path');
const uaparser = require('ua-parser-js')
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const userInfoRouter = require('./routes/userInfo');
const categoriesRouter = require('./routes/categories');
const dBQueryRouter = require('./routes/DBQuery');

const req = require("express/lib/request");
const ua = require("./components/UA")
const DBRepo = require("./components/db")

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userInfo', userInfoRouter);
app.use('/categories', categoriesRouter);
app.use("/db", dBQueryRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: err.statusCode });
});


// testing db connection
DBRepo.getDBRepo().connection.connect((err) => {
  if (err) {
    console.error("Connection error", err);
  }
  else {
    console.info("Connected to the database");
  }
})



app.set('trust proxy', true);


module.exports = app;
