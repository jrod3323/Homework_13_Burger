// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb){
      orm.selectAll(function(res){
          cb(res);
      })
  },
  create: function(burger_name,cb){
    orm.insertOne(burger_name,cb)
  },
  update: function(devoured, id, cb) {
    orm.updateOne(devoured, id, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;