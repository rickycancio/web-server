var express = require('express');
var app = express();

//we are making our own web server
//get is when the user requires an http page
//app.get('/', function (req, res) {
	//req is the request from user, like page and json, etc
	//res is the response back to the user
//	res.send('Hello Express');
//})

var middleware = require('./middleware.js');

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log(new Date().toString() + ' Request: ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

//tell express that we need authentication globally
app.use(middleware.logger);

//use authentication on about page
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About us!');
})


app.use(express.static(__dirname + '/public'));

var port = 3000;
app.listen(port, function() {
	console.log('Express started on port ' + port);
});