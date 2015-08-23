var express = require('express');

var app = express();
app.get('/', function (req, res) {
  var ob = {};
  obj.node = process.env.TUTUM_NODE_HOSTNAME;
  obj.version = "v2";

  //res.send(process.env.TUTUM_NODE_HOSTNAME);
});

app.listen(process.env.PORT);
