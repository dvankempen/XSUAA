// app server
const express = require('express');
const app = express();

// home page
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// use port 3000 unless there exists a preconfigured port
var port = process.env.port || 3000;
// start app server
app.listen(port);
