var http = require('http');
var sql = require('node-sqlserver-unofficial');
var http = require('http');
var fs = require('fs');
var useTrustedConnection = false;
var conn_str = "Driver={SQL Server Native Client 11.0};Server=tcp:r4novqyjgt.database.windows.net;" + 
(useTrustedConnection == true ? "Trusted_Connection={Yes};" : "UID=praveengogula@r4novqyjgt;PWD=Dhanalakshmi@92;") + 
"Database={SqlDataBase2};"
sql.open(conn_str, function (err, conn) {
    if (err) {
        console.log("Error opening the connection!");
        return;
    }
    else
        console.log("Successfuly connected");
	
	
	 conn.queryRaw("INSERT INTO Person (firstName, lastName, age) VALUES ('Krishna','Gokul',100)", function (err, results) {
        if (err) {
            console.log("Error running query!");
            return;
        }
        for (var i = 0; i < results.rows.length; i++) {
            console.log("Product ID Inserted : "+results.rows[i]);
        }
    });
});


 

