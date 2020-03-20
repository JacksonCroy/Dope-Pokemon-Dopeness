$(document).ready(function() {
    $("#search-btn").on("click", getUserPokemon)

    function getUserPokemon(e) {
        e.preventDefault();
        let pokeId = $("#search-value").val()

        $.ajax({
            method: "GET",
            url: "/fight/" + pokeId
        }).then(function(data) {
            console.log(data)
            $("#userPoke").append(
                $("<li>").text("Name: " + data.Name),
                $("<li>").text("HP: " + data.HP),
                $("<li>").text("Attack: " + data.Attack),
                $("<li>").text("Defense: " + data.Defense)
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
                $("<li>").text("Defense: " + data.Defense)
            )
        })
    }
});