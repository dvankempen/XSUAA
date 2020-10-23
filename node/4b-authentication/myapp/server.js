// app server
const express = require('express');
const app = express();

const xsenv = require('@sap/xsenv');
var services = xsenv.getServices({ hana:'hdicontainer-1', uaa:'myxsuaa' });

const hdbext = require('@sap/hdbext');
app.use('/hana', hdbext.middleware(services.hana));
var sql = 'select * from SYS.M_DATABASE';

const passport = require('passport');
var JWTStrategy = require('@sap/xssec').JWTStrategy;
passport.use(new JWTStrategy(services.uaa));
app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));

// Get environment using passport, xsenv, and xssec
app.get('/xsuaa', function (req, res, next) {
  res.send('Application user: ' + req.user.id + '<br>' + 'HANA user: ' + services.hana.user);
});

// Query database using hdbext
app.get('/hana', function (req, res, next) {
    req.db.exec(sql, function (err, rows) {
    if (err) { return next(err); }
    res.send(rows);
  });
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Start server
app.listen(process.env.PORT || 3000, ()=>{});
