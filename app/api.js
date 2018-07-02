var express = require('express');
var bodyParser = require('body-parser')

// Imports for accessing the filesystem
var path = require('path');

// Initialise the app
var app = express();

// Configure the app to use body parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Initialise the models
var models = require('./models');
models.init(app);

// Import routes
app.use('/users', require('./routes/users'));

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;