var express = require('express');
var path = require('path'); //core Node module for working with/handling paths (e.g. path.join())
var favicon = require('serve-favicon'); //middleware for serving favicon
var logger = require('morgan'); //middleware for logging requests/responses
var cookieParser = require('cookie-parser'); //handles cookies
var bodyParser = require('body-parser');   //adds a body object to your requet so you can access POST

var routes = require('./routes/index');
var users = require('./routes/users');
var memes = require('./routes/memes');
var comments = require('./routes/comments');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  //tells Express to use the /views folder in app directory
app.set('view engine', 'jade');  //tells Express to use jade templating engine

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use tells app to use paramaters you're giving it.
app.use(logger('dev'));  //logs the requests to the console.
app.use(bodyParser.json()); //enables JSON parsing
app.use(bodyParser.urlencoded({ extended: false })); //allows reading data from URLs
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //tells app to use /public directory
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
//first parameter is the path, the second is the function to execute
app.use('/', routes);
app.use('/memes', memes);
app.use('/comments', comments);
app.use('/users', users);
app.locals.pretty = true;

//404 not result of error, but of express running out of options
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
