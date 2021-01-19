// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // watches for devoured button to be clicked and then runs put request to update burger to eaten
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevoured");
      // create object to be delivered as data in put request
      var newDevourState = {
        devoured: newDevour
      };
  
      // Send the PUT request to update a burger.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // watches for add a burger button to be submitted and then runs the post request
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      //object to pass into request body
      var newBurger = {
        name: $("#bu").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  