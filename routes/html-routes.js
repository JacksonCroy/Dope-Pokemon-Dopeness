const path = require("path");

module.exports = function(app) {

   
 
    app.get("/create", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/add.handlebars"));
    });
  
   
  };
  