// app server
const express = require('express');
const app = express();

// home page
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Start server
app.listen(process.env.PORT || 3000, ()=>{});
