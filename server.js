var http = require("http");
var express = require("express");
var app = express();
var controllers = require("./controllers");

app.set("view engine", "vash");
controllers.init(app);
// app.get("/", function(req, res) {
// 	res.render("index", { title: "express" + "vash" });
// });



var server = app.listen("3000", function() {
	console.log("listening on port %d", server.address().port);
});