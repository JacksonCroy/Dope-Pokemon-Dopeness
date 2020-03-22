uPoke = ''
ePoke = ''

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
                $("<li>").text("Defense: " + data.Defense),
                $(`<img src = https://pokeres.bastionbot.org/images/pokemon/${data.Number}.png>`),
                uPoke = data

            )
            return uPoke
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
                $(`<img src = https://pokeres.bastionbot.org/images/pokemon/${data.Number}.png>`),
                ePoke = data

            )
            return ePoke
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
        // on success, run uPoke callback
        .then(function(data) {
            // log the data we found
            console.log(data);
            // tell the user we're adding a character with an alert window
            alert("Adding character...");
        });


});


isAlive = function() {
    if (uPoke.HP > 0) {
        // console.log(uPoke.name + " is still alive!");
        console.log("\n-------------\n");
        return true;
    }
    console.log(uPoke.Name + " has died!");
    return false;
};

printStats = function() {
    console.log(
        "Name: " +
        uPoke.Name +
        "\nType: " +
        uPoke.Attack +
        "\nHP: " +
        uPoke.HP
    );
    console.log("\n-------------\n");
};

attack = function attack(ePoke) {
    var attInterval = setInterval(() => {


        if (ePoke == isAlive()) {
            ePoke.HP -= uPoke.Attack;

            console.log("uPoke: " + uPoke.Name, uPoke.HP);
            console.log("Defender: " + ePoke.Name, ePoke.HP);
        } else {
            function myStopFunction() {
                clearInterval(attInterval);
                console.log(uPoke.Name + " Has killed " + ePoke.Name);
            }
            myStopFunction()
        }
    }, 1000);
};




$(document).ready(function() {
    $("#fightButton").on("click", function() {
        console.log(uPoke.Name)
        attack(ePoke)
    });
});