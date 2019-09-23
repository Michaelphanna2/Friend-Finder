//need to npm install path
var path = require("path");

module.exports = function(app) {

  // create Get requests for html pages
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // this is if the route can't be found, it routes back to the home page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  };


