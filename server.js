var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
//we are making our own web server
//get is when the user requires an http page
//app.get('/', function (req, res) {
	//req is the request from user, like page and json, etc
	//res is the response back to the user
//	res.send('Hello Express');
//})

//call the function to get middleware functions
var middleware = require('./middleware.js')();

//tell express that we need authentication globally
app.use(middleware.logger);

//use authentication on about page
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('We are running on port: ' + port);
})

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
	console.log('Express started on port ' + port);
});