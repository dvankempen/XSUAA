// express
const express = require('express');
const app = express();

// hana
const hana = require('@sap/hana-client');
var conn = hana.createConnection();
var conn_params = {
  serverNode: 'fb33c77f-0d7a-46db-812d-260656cd8531.hana.trial-eu10.hanacloud.ondemand.com:443',
  uid: 'DBADMIN',
  pwd: 'Initial1',
  encrypt: 'true',  //Must be set to true when connecting to SAP HANA Cloud
  sslValidateCertificate: 'false'  //Must be set to false when connecting
};

var sql = "select * from SYS.M_DATABASE";

// home page
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// hana page
app.get('/hana', function (req, res, next) {
  conn.connect(conn_params, function(err) {
    var rows = conn.exec(sql, function (err, rows) {
      res.send(rows);
    conn.disconnect();
    });
  })
});

// Start server
app.listen(process.env.PORT || 3000, ()=>{})
