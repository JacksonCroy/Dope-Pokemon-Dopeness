// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/", function(req, res) {
        db.pokemon.findAll({})
            .then(function(dbPokemon) {
                let hbsObject = {
                    pokemon: dbPokemon
                };
                res.render("index", hbsObject)
            });
    });
<<<<<<< HEAD
}

=======


    app.get("/fight/:id", function(req, res) {
        db.pokemon.findOne({
                where: {
                    Number: req.params.id
                }
            })
            .then(function(poke) {
                res.json(poke);
            });
    });



}
>>>>>>> 5e5c1f3274562cfb2b432130e7fe67b652d6d2e4
