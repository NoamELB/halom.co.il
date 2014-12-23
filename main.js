var express = require("express");

// Setting up the server
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/app'));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/partials', express.static(__dirname + '/partials'));

app.all('/*', function(req, res) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('app/index.html', { root: __dirname });
});
app.use(require('prerender-node'));
app.get("/", function(req, res) {
	res.render('index');
});

app.listen(app.get('port'), function(){
	console.log("\t+*+*+ New server on localhost:" + app.get('port') + " +*+*+");
});
