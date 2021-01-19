var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM burgers_db.burgers";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },
      insertOne: function(burger_name) {
        var queryString = "INSERT INTO burgers (burger_name) Values(?);";
        connection.query(queryString, [burger_name], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },
      updateOne: function(devoured,id) {
        var queryString = "Update burgers_db.burgers SET devoured = ? where id =?;";
        connection.query(queryString, [devoured,id], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
};

module.exports = orm;