//set up the express npm package dependencies to make the server work
var express = require("express");
var app = express();

var PORT = process.env.PORT || 8070;

//start up the server - reference activity 1 on class 13.1 video
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
    });
    

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create the route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

