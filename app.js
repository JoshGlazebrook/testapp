var express = require('express');

var app = express();
app.get('/', function (req, res) {
  var obj = {};
  obj.node = process.env.TUTUM_NODE_HOSTNAME;


  res.send(obj);

  //res.send(process.env.TUTUM_NODE_HOSTNAME);
});

app.get('e8d2ee8c760dba091e33a7bfe767c341.txt', function (req, res) {
  res.send('loaderio-e8d2ee8c760dba091e33a7bfe767c341');
});

app.listen(process.env.PORT);
