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