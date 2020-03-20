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

    app.post("/create", function(req, res) {
        console.log(req.body);
        db.pokemon.create({
        Name: req.body.name,
        Type1: req.body.type1,
        Type2: req.body.type2,
        Total: req.body.total,
        HP: req.body.hp,
        Attack: req.body.attack,
        Defense: req.body.defense,
        Sp_Atk: req.body.sp_atk,
        Sp_Def: req.body.sp_def,
        Speed: req.body.speed,
        Generation: req.body.generation,
        Legendary: req.body.Legendary,
        User: req.body.user,
        Enemy: req.body.enemy,
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });


}
