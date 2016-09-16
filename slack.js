var	webhook = 	'https://hooks.slack.com/services/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'
var	requestify =	require('requestify');

exports.sendMessage = function(message){
	requestify.post(webhook, message);
};