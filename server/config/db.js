var mysql = require("mysql2");
require("dotenv").config();

var conn = mysql.createConnection({
  host: process.env.DATABSE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// var conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = conn;
