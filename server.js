var express = require("express");
var app = express();
var path = require("path");


let port = process.env.PORT;
if (port == null || port == "") {
  port = 2019;
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/htmlRoutes")(app);
require('./app/routing/apiRoutes')(app);

app.listen(port, host, function() {
  console.log("Server started on port " + port);
});
