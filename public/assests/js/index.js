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
<<<<<<< HEAD
=======
            $("#userPoke").append(
                $("<li>").text("Name: " + data.Name),
                $("<li>").text("HP: " + data.HP),
                $("<li>").text("Attack: " + data.Attack),
                $("<li>").text("Defense: " + data.Defense),
                $(`<img src = https://pokeres.bastionbot.org/images/pokemon/${data.Number}.png>`)
            )
        })
    }
    $("#search-btn2").on("click", getEnemyPokemon)

    function getEnemyPokemon(e) {
        e.preventDefault();
        let pokeId = $("#search-value2").val()

        $.ajax({
            method: "GET",
            url: "/fight/" + pokeId
        }).then(function(data) {
            console.log(data)
            $("#enemyPoke").append(
                $("<li>").text("Name: " + data.Name),
                $("<li>").text("HP: " + data.HP),
                $("<li>").text("Attack: " + data.Attack),
                $("<li>").text("Defense: " + data.Defense),
                $(`<img src = https://pokeres.bastionbot.org/images/pokemon/${data.Number}.png>`)
            )
>>>>>>> 34f01bc8af164909057f7d31a58ff1db90e72c14
        })
    }
});



// submitEl.addEventListener("click", function(event) {
//   event.preventDefault();


$("#add-btn").one("click", function(event) {

    event.preventDefault();
    event.stopPropagation();


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
            alert("Adding character...");
        });


});