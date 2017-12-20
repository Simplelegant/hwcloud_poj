var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.PORT;

var app = express();

var router = express.Router();

router.get('/', function(res, res) {
	res.json({
		errno: 0,
		data: news
	});
});