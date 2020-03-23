uPoke = ''
ePoke = ''


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

            $("#userPoke").append(
                $("<li>").text("Name: " + data.Name),
                $("<li>").text("HP: " + data.HP),
                $("<li>").text("Attack: " + data.Attack),
                $("<li>").text("Defense: " + data.Defense),
                $(`<img src = https://pokeres.bastionbot.org/images/pokemon/${data.Number}.png id="user">`),
                uPoke = data

            )
            $("#search1").remove('#search1');

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

            $("#enemyPoke").fadeIn(3000);
            $("#enemyPoke").append(
                $("<li>").text("Name: " + data.Name),
                $("<li>").text("HP: " + data.HP),
                $("<li>").text("Attack: " + data.Attack),
                $("<li>").text("Defense: " + data.Defense),
                $(`<img src = https://pokeres.bastionbot.org/images/pokemon/${data.Number}.png id="enemy">`),
                ePoke = data

            )
            $("#search2").remove('#search2');

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




// printStats = function() {
//     console.log(
//         "Name: " +
//         uPoke.Name +
//         "\nType: " +
//         uPoke.Attack +
//         "\nHP: " +
//         uPoke.HP
//     );
//     console.log("\n-------------\n");
// };

isAlive = function() {
    if (ePoke.HP > 0) {
        console.log(ePoke.Name + " is still alive!");
        console.log(ePoke.HP)
        console.log("\n-------------\n");
        return true;
    }
    console.log(this.name + " has died!");
    return false;
};

var counter = 0;

function counterF() {
    counter++;
    alert("I have been called " + counter + " times");
}
attack = function attack(ePoke) {
    $("#user").animate({ left: "500px" }, "fast");
    $("#user").animate({ left: "105" }, "slow");
    var attInterval = setInterval(() => {
        ePoke.HP -= uPoke.Attack
        counter++
        // console.log(ePoke.HP)

        if (isAlive() === true) {
            attack(ePoke)

        } else {

            function myStopFunction() {
                $("#userPoke").append(
                    $("<li  id='vic'>").text("Victory!"))
                $("#enemyPoke").replaceWith(
                    $("<li>").text("Name: " + ePoke.Name),
                    $("<li  id='deadHp'>").text("HP: " + 0),
                    $("<li>").text("Attack: " + ePoke.Attack),
                    $("<li>").text("Defense: " + ePoke.Defense),
                    $(`<img src = https://pokeres.bastionbot.org/images/pokemon/${ePoke.Number}.png id="dead"> <div id="deadDiv">Dead!</div>`))
                $("#fightBox").show(2000)
                $("#fightButton").replaceWith(
                    $(`<button type="submit" class="btn btn-danger btn-lg text-center" id="reset">`).text('Fight Again?'))
                $("#reset").on("click", function() {
                    location.reload()
                });



                clearInterval(attInterval);
                console.log(uPoke.Name + " Has killed " + ePoke.Name);
                // console.log(counter)
            }
            myStopFunction()
        }
    }, 1000);
};




$(document).ready(function() {
    $("#fightButton").on("click", function() {
        $("#fightBox").toggle();

        $("#bigBox").remove('search-value');

        attack(ePoke);
        console.log(uPoke.Name);
        console.log(uPoke.HP);
        console.log("---------------------------------------")
        console.log(ePoke.Name)
        console.log(ePoke.HP)
    });
});