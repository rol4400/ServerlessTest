// Initiate the caminte framework
var caminte = require('caminte');
var Schema = caminte.Schema;

// Requirements for accessing the filesystem
var fs = require('fs');
var path = require('path');

// Import models
var modelDir = path.resolve(__dirname, './models');
var modelList = fs.readdirSync(modelDir); // TODO: Make this async if possible

// Initialise database
var dbConf = require('./database');
var database = dbConf[process.env.NODE_ENV || 'dev'];
var schema = new Schema(database.driver, database);

// Setup the database schema
caminte.schema = schema;
caminte.model = function (name){
   return caminte.schema.models[name.toLowerCase()];
};

module.exports.init = function (app) {

      // Allow caminte to create new tables if the database is blank
      process.env.AUTOUPDATE = true;

      if(!app.models) {
         app.models = {};
      }

      // Import models (from caminte framework documentation)
      var count = modelList.length;
      for(var m = 0; m < modelList.length; m++) {
          var modelFile = modelList[m];
          if (/Model\.js$/i.test(modelFile)) {
             var modelName = modelFile.replace(/\.js$/i, '');
             app.models[modelName] = require(modelDir + '/' + modelName)(schema);
             if(--count === 0) {
                exports.relations();
             }
          }
      }

      // Attempt updating the schema (as explained above)
      if ('function' === typeof schema.autoupdate) {
          if (process.env.AUTOUPDATE) {
              schema.autoupdate(function (err) {
                  if (err) {
                      console.log(err);
                  }
              });
          }
     }
     return app;
}

// Imports the model relationships
module.exports.relations = function (models) {
     require(modelDir + '/relations').load(models);
};
