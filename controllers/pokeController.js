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


router.post("/create", function(req, res) {
    pokemon.create([

        "Number",
        "Type1", 
        "Type2",
        "Total",
        "HP",
        "Attack",
        "Defense",
        "Sp_Atk",
        "Sp_Def",
        "Speed",
        "Generation",
        "Legendary",
        "User",
        "Enemy",

    ], 
    [

        req.body.Name, 
        req.body.Type1,
        req.body.Type2,
        req.body.Total,
        req.body.HP,
        req.body.Attack,
        req.body.Defense,
        req.body.Sp_atk,
        req.body.Sp_def,
        req.body.Speed,
        req.body.Generation,
        req.body.Legendary,
        req.body.User,
        req.body.Enemy,

    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

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