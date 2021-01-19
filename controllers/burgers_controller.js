var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var dataObject = {
        burgers: data
      };
      console.log(dataObject);
      res.render("index", dataObject);
    });
  });


// Export routes for server.js to use.
module.exports = router;