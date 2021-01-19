var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers_db.burgers";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
      insertOne: function(burger_name,cb) {
        var queryString = "INSERT INTO burgers (burger_name) Values(?);";
        connection.query(queryString, [burger_name], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
      updateOne: function(devoured,id,cb) {
        var queryString = "Update burgers_db.burgers SET devoured = ? where id =?;";
        connection.query(queryString, [devoured,id], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    }
};

module.exports = orm;