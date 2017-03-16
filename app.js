var express = require('express');
var path = require('path');
var session = require('express-session');
var mongoose = require('mongoose');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var mongoStore = require('connect-mongo')(session);
var morgan = require('morgan')
mongoose.Promise = require('bluebird');
var dbUrl='mongodb://localhost:27017/imooc';
mongoose.connect(dbUrl);
app.set('views','./app/views/pages');
app.set('view engine','jade');

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
  secret: 'imooc',
  store: new mongoStore({
     url: dbUrl,
     collection: 'sessions'
    }),
  resave: false,
  saveUninitialized: true
  }));
if('development' === app.get('env')) {
  app.set('showStackError',true);
  app.use(morgan(':method:url:status'));
  app.locals.pretty = true;
  mongoose.set('debug',true);
}
require('./config/routes')(app)
app.use(serveStatic('public'));
app.locals.moment = require('moment');
app.listen(port);
console.log('fzys is running at ' + port);

