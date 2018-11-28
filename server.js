var express = require('express');
var app = express();
var port = 3000;

// set the home page route
app.get('/', function(req, res) {
	var returnValue = {
		message: 'server is online'
	}
	console.log('service entry point accessed');
	res.send(returnValue);
});

app.post('/hello/:name', function(req, res) {
	var returnValue = {
		message: `Hello, ${req.params.name}!`
	};
	console.log(`Hello endpoint accessed - HTTP POST - from: ${req.ip} @${new Date()}`);
	res.send(returnValue);
});

app.listen(port, function() {
   console.log('Our app is running on port ' + port);
});