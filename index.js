'use strict';

var fs = require('fs');
var path = require('path');

exports.get = function(event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};

exports.post = function(event, context, callback) {
	var result = {
		statusCode: 200,
		body: "Hello World" + context,
		headers: {'content-type': 'text/html'}
	};
	
	callback(null, result);
};