var express = require('express');

var app = express();
app.get('/', function (req, res) {
  var obj = {};
  obj.node = process.env.TUTUM_NODE_HOSTNAME;
  

  res.send(obj);

  //res.send(process.env.TUTUM_NODE_HOSTNAME);
});

app.listen(process.env.PORT);
