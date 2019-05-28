var express = require("express");
var app = express();
var path = require("path");

var port = process.env.port || 2019;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/htmlRoutes")(app);
require('./app/routing/apiRoutes')(app);

app.listen(port, function() {
  console.log("Server started on port " + port);
});
