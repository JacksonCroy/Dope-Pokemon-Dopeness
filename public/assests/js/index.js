$(document).ready(function() {
    $("#search-btn").on("click", getPokemon)

    function getPokemon(e) {
        e.preventDefault();
        let pokeId = $("#search-value").val()

        $.ajax({
            method: "GET",
            url: "/fight/" + pokeId
        }).then(function(data) {
            console.log(data)
        })
    }
});

$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    
    let newPokemon = {
      
      name: $("#name").val().trim(),
      type1: $("#type1").val().trim(),      
      type2: $("#type2").val().trim(),   
      total: $("#total").val().trim(),
      hp: $("#hp").val().trim(),
      attack: $("#attack").val().trim(),      
      defense: $("#defense").val().trim(),   
      sp_atk: $("#sp_atk").val().trim(),
      sp_def: $("#sp_def").val().trim(),   
      speed: $("#speed").val().trim(),
      generation: $("#generation").val().trim(),
      legendary: $("#legendary").val().trim(),      
      user: $("#user").val().trim(),   
      enemy: $("#enemy").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/create", newPokemon)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding character...");
      });
  
    // empty each input box by replacing the value with an empty string
   name: $("#name").val("");
      $("#type1").val("");,      
      $("#type2").val("");  
      $("#total").val("");,
      $("#hp").val("");
      $("#attack").val("");     
      $("#defense").val("");  
      $("#sp_atk").val("");
      $("#sp_def").val("");  
      $("#speed").val("");
      $("#generation").val("");
      $("#legendary").val("");    
      $("#user").val("");
      $("#enemy").val("");
  });