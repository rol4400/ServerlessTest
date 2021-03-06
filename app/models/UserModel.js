/**
 *  User schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define User Model
 *  @param {Object} schema
 *  @return {Object}
 **/
module.exports = function(schema){
    var User = schema.define('user', {
           active : { type : schema.Boolean },
           name : { type : schema.String },
           email : { type : schema.String },
           password : { type : schema.String },
           note : { type : schema.Text },
           created : { type : schema.Date }
    },{


    });

    // additional methods and validation here

    return User;
};
