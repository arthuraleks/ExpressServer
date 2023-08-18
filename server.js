var express = require("express");
var app = express();

// get the client
const mysql = require('mysql2');




app.get("/", function (req, res) {
    //  conectamos 

    // create the connection to database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'classicmodels'
    });

    // simple query
    connection.query(
        'SELECT * FROM classicmodels.customers',
         (err, results, fields) => {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            res.send(results);
        }
    );

});

app.listen(3000, function () {

    

    console.log("Aplicación ejemplo, escuchando el puerto 3000!");
});