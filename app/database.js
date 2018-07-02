/**
 *  Default database configuration file
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 *
 *  docs: https://github.com/biggora/caminte/wiki/Connecting-to-DB#connecting
 **/

module.exports.production = {
    driver     : 'mysql',
    host       : 'serverlesstest.cxtpl8lgen3x.us-east-2.rds.amazonaws.com',
    port       : '3306',
    username   : 'rol4400_root',
    password   : 'ViperZ01',
    database   : 'serverlesstest',
    autoReconnect : true
};

module.exports.development = {
    driver     : 'mysql',
    host       : 'localhost',
    port       : '3306',
    username   : 'root',
    password   : 'password',
    database   : 'serverlesstest',
    autoReconnect : true
};

module.exports.test = {
    driver     : 'memory',
    database   : 'serverlesstest',
    autoReconnect : true
};

module.exports.dev = module.exports.development;