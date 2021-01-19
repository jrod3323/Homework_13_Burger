// Set up MySQL connection.
var mysql = require("mysql2");
var connection;

if(process.env.JAWSDB_URL){
  connection =mysql.createConnection(provess.env.JASWDB_URL)
}else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }); 
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;