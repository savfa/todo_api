const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

exports.con = con;