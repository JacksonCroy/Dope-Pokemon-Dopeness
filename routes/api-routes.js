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
    db.pokemon.findAll({}).then(function(dbPokemon) {
      let hbsObject = {
        pokemon: dbPokemon
      };
      res.render("index", hbsObject);
    });
  });

  app.get("/fight/:id", function(req, res) {
    db.pokemon
      .findOne({
        where: {
          Number: req.params.id
        }
      })
      .then(function(poke) {
        res.json(poke);
      });
  });

  app.get("/fight", function(req, res) {
    res.render("fight");
  });

  app.get("/choose", function(req, res) {
    res.render("choose");
  });

  app.get("/create", function(req, res) {
    res.render("create");
  });

  app.get("/pokedex", function(req, res) {
    db.pokemon.findAll({}).then(function(dbPokemon) {
      let hbsObject = {
        pokemon: dbPokemon
      };
      res.render("pokedex", hbsObject);
    });
  });

  app.post("/create", function(req, res) {
    console.log(req.body);
    db.pokemon
      .create({
        Number: req.body.Number,
        Name: req.body.Name,
        Type1: req.body.Type1,
        Type2: req.body.Type2,
        Total: req.body.Total,
        HP: req.body.HP,
        Attack: req.body.Attack,
        Defense: req.body.Defense,
        Sp_Atk: req.body.Sp_atk,
        Sp_Def: req.body.Sp_def,
        Speed: req.body.Speed,
        Generation: req.body.Generation,
        Legendary: req.body.Legendary,
        User: req.body.User,
        Enemy: req.body.Enemy
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
