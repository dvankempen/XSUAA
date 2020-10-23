// app server
const express = require('express');
const app = express();
// Cloud Foundry environment (cfenv) by SAP (xsenv)
const xsenv = require('@sap/xsenv');
// HANA Database extensions by SAP (hdbext)
const hdbext = require('@sap/hdbext');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var sql = "select * from SYS.M_DATABASE";
// get connection information from bound service
var services = xsenv.getServices({ hana:'hdicontainer-1' });
app.use('/hana', hdbext.middleware(services.hana));
app.get('/hana', function (req, res, next) {
    req.db.exec(sql, function (err, rows) {
    if (err) { return next(err); }
    res.send(rows);
  });
})

// Start server
app.listen(process.env.PORT || 3000, ()=>{});
