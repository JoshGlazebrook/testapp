var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send(process.env.TUTUM_NODE_HOSTNAME);
});

app.listen(process.env.PORT);
