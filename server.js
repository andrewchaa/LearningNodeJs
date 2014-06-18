var http = require("http");
var express = require("express");
var controllers = require("./controllers");
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();


app.set("view engine", "vash");

app.use(bodyParser());
app.use(cookieParser());
app.use(session( { secret : "HelloWorld" }));
app.use(flash());
app.use(express.static(__dirname + "/public"));

controllers.init(app); 

var server = app.listen("3000", function() {
	console.log("listening on port %d", server.address().port);
});