var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    // route to get all from the DB and display
    burger.all(function(data) {
      var dataObject = {
        burgers: data
      };
      console.log(dataObject);
      res.render("index", dataObject);
    });
  });
  // route to add a new burger
  router.post("/api/burgers", function(req, res) {
    burger.create(req.body.name, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  // route to update a burger to eaten
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update( 1, req.params.id, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


// Export routes for server.js to use.
module.exports = router;