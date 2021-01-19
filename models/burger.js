// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // model to call the orm.selectAll to query all from table
  all: function(cb){
      orm.selectAll(function(res){
          cb(res);
      })
  },
  // model to call the orm.insertOne to insert a new burger
  create: function(burger_name,cb){
    orm.insertOne(burger_name,cb)
  },
  // model to call the orm.updateOne to update a burger and move to devoured
  update: function(devoured, id, cb) {
    orm.updateOne(devoured, id, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller
module.exports = burger;
