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
        db.Pokemon.findAll({})
            .then(function(dbPokemon) {
                let hbsObject = {
                    pokemon: dbPokemon
                };
                res.render("index", hbsObject)
                res.json(dbPokemon);
            });
    });
}