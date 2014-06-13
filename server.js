var http = require("http");
var express = require("express");
var app = express();
var controllers = require("./controllers");

app.set("view engine", "vash");
app.use(express.static(__dirname + "/public"));

controllers.init(app); 

var server = app.listen("3000", function() {
	console.log("listening on port %d", server.address().port);
});