var express = require('express');
var app = express();
var request = require('request');
app.set('port', (process.env.PORT || 5000));
app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});

app.get('/hello', function(req, res) {
	res.sendfile("<p> This is extremely new to me <p>");
});

app.listen(app.get('port'), function() {
	console.log('Fuck it ship it.');
});
