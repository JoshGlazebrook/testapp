var express = require('express');
var logger = require('morgan');
var methodOverride = require('method-override');

var app = express();
app.use(logger('dev'));
app.use(methodOverride());


app.get('/', function (req, res) {
  var obj = {};
  obj.node = process.env.TUTUM_NODE_HOSTNAME;
  obj.other = "hello";

  res.send(obj);

  //res.send(process.env.TUTUM_NODE_HOSTNAME);
});

app.get('/loaderio-e8d2ee8c760dba091e33a7bfe767c341.txt', function (req, res) {
  res.send('loaderio-e8d2ee8c760dba091e33a7bfe767c341');
});

app.get('/test', function (req, res) {
  res.send('pass');
});

app.listen(process.env.PORT || 3000);
