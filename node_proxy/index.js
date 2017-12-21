var express = require('express');

var app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.get('/seller', function (req, res) {
	res.json({
		errno: 0,
		data: news
	});
});

var appData = require('./data.json');
var news = appData.news;


app.listen(8085, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:8085' + '\n')
});