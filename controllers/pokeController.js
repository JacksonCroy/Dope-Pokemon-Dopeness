var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var pokemon = require("../models/pokemon.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    pokemon.all(function(data) {
        var hbsObject = {
            pokemon: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


// router.post("/create", function(req, res) {
//     pokemon.create([

//         "number",
//         "type1", 
//         "type2",
//         "total",
//         "hp",
//         "attack",
//         "defense",
//         "sp_Atk",
//         "sp_Def",
//         "speed",
//         "generation",
//         "legendary",
//         "user",
//         "enemy",

//     ], 
//     [

//         req.body.name, 
//         req.body.type1,
//         req.body.type2,
//         req.body.total,
//         req.body.hp,
//         req.body.attack,
//         req.body.defense,
//         req.body.sp_atk,
//         req.body.sp_def,
//         req.body.speed,
//         req.body.generation,
//         req.body.legendary,
//         req.body.user,
//         req.body.enemy,

//     ], function(result) {
//         // Send back the ID of the new quote
//         res.json({ id: result.insertId });
//     });
// });

router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    cat.update({
        sleepy: req.body.sleepy
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    cat.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;