var express = require("express");

// Setting up the server
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/app'));
app.use(require('prerender-node'));
app.get("/", function(req, res) {
	res.render('index');
});

app.listen(app.get('port'), function(){
	console.log("\t+*+*+ New server on localhost:" + app.get('port') + " +*+*+");
});
