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

// var submitEl = document.querySelector("#add-btn");

// submitEl.addEventListener("click", function(event) {
//   event.preventDefault();


$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    
    let newPokemon = {
      
      Name: $("#Name").val().trim(),
      Type1: $("#Type1").val().trim(),
      Type2: $("#Type2").val().trim(),  
      Total: $("#Total").val().trim(),
      HP: $("#HP").val().trim(),
      Attack: $("#Attack").val().trim(),     
      Defense: $("#Defense").val().trim(),  
      Sp_atk: $("#Sp_atk").val().trim(),
      Sp_def: $("#Sp_def").val().trim(),  
      Speed: $("#Speed").val().trim(),
      Generation: $("#Generation").val().trim(),
      Legendary: $("#Legendary").val().trim(),    
      User: $("#User").val().trim(),
      Enemy: $("#Enemy").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/create", newPokemon)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        // alert("Adding character...");
      });
  

  });