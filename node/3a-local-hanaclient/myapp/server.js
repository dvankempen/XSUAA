// function createConnection requires SAP HANA client
var hana = require('@sap/hana-client');
var conn = hana.createConnection();

// connection parameters
var conn_params = {
  serverNode: 'fb33c77f-0d7a-46db-812d-260656cd8531.hana.trial-eu10.hanacloud.ondemand.com:443',
  uid: 'DBADMIN',
  pwd: 'Initial1',
  encrypt: 'true',  //Must be set to true when connecting to SAP HANA Cloud
  sslValidateCertificate: 'false'  //Must be set to false when connecting
};

// SQL statement
var sql = "select * from SYS.M_DATABASE";

// connect and run query
conn.connect(conn_params, function(err) {
    var rows = conn.exec(sql, function (err, rows) {
    console.log('Results: ', rows);
    conn.disconnect();
    });
});
