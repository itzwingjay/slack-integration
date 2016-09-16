var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var router = express.Router();
var slack = require('./slack.js');


app.use(bodyParser.json());


app.post('/', function(req, res){
	if(req.get('X-GitHub-Event') == 'push'){
		slack.sendMessage({
			'text': '<' + req.body.sender.url + '|' + req.body.sender.login + '> ' + req.body.action + ' watching <' + req.body.repository.url + '|' + req.body.repository.name + '>'
		});
	}
	res.sendStatus(200);
});



app.get("/",function(req,res){
    res.json({"aJsonField" : "Hello World"});
});

//app.use('/',router);
app.listen(8080);
console.log("Server is running on 3000");