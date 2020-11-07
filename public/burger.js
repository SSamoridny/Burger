// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready( function(){

    $(".devourBurger").on("click", function(event) {
      console.log("test");
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      console.log("test");
  
      var updatedBurger = {
        isDevoured: true
      };
  
      var id = $(this).data("id");
  
      // Send the POST request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updatedBurger
      }).then(
        function() {
          console.log("Devoured Burger");
          // Reload the page to get the updated list
          location.assign("/");
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#Name").val().trim()
      };
  
      console.log( `[POSTING to server]`, newBurger )
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          location.reload();
        }
      );
    });
  });