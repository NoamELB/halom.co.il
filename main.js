(function() {
	'use strict';
	var fs 			= require("fs"),
		express 	= require("express"),
		http 		= require("http");

	// Setting up the server
	var app = express();
	var server = http.createServer(app);

	var config = JSON.parse(fs.readFileSync("./routes/config.json"));
	var host = config.host;
	var port = config.port;

	app.use(express.static(__dirname + '/app'));
	app.get("/", function(req, res) {
		res.render('index');
	});

	server.listen(port, host, function(){
		console.log("\t+*+*+ New server on " + host + ":" + port + " +*+*+");
	});
})();