var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var router = express.Router();
var port = process.env.PORT || 8080
var slack = require('./slack.js');


app.use(bodyParser.json());


app.post('/', function(req, res){
	if(req.get('X-GitHub-Event') == 'push'){
		slack.sendMessage({
			'attachments' : [
				{
					"text": '<' + req.body.sender.html_url + '|' + req.body.sender.login + '> ' + ' pushed to <' + req.body.repository.url + '|' + req.body.repository.name + '>' + '\nCommit message is: <' + req.body.commits[0].url + '|' + req.body.commits[0].message + '>',
					"thumb_url": req.body.sender.avatar_url,
					"color": "#c7f3f3"
				}
			]
		});
	}
	if(req.get('X-GitHub-Event')== 'pull request'){
		slack.sendMessage({

		});
	}
	res.sendStatus(200);
});



app.get("/",function(req,res){
    res.json({"aJsonField" : "Hello World"});
});

//app.use('/',router);
app.listen(port);
console.log("Server is running on 8080");