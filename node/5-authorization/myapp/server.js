// app server
const express = require('express');
const app = express();

// XSUAA
const passport = require('passport');
const xsenv = require('@sap/xsenv');
var services = xsenv.getServices({ uaa:'myxsuaa' });
var JWTStrategy = require('@sap/xssec').JWTStrategy;
passport.use(new JWTStrategy(services.uaa));
app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));

// Users file
const users = require('./users.json');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/users', function (req, res) {
  var isAuthorized = req.authInfo.checkScope('$XSAPPNAME.Display');
  if (isAuthorized) {
    res.status(200).json(users);
  } else {
    res.status(403).send('Forbidden');
  }
});

app.post('/users', function (req, res) {
  const isAuthorized = req.authInfo.checkScope('$XSAPPNAME.Update');
  if (!isAuthorized) {
    res.status(403).json('Forbidden');
    return;
  }

  var newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);

  res.status(201).json(newUser);
});

// Start server
app.listen(process.env.PORT || 3000, ()=>{});
