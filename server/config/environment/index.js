'use strict';

var path = require('path');
var _ = require('lodash');

//  CHECK TO MAKE SURE AN ENVIRONMENT IS SET
function requiredProcessEnv(name) {
    if (!process.env[name]) {
        throw new Error('You must set the ' + name + ' environment variable');
    }
    return process.env[name];
}

// SET DEFAULTS FOR CONFIGURING THE SERVER
var all = {
    env: process.env.NODE_ENV,
    
    // Root path of server
    root: path.normalize(__dirname + '/../../..'),
    
    // Server port
    port: process.env.PORT || 9000,

    //  TODO: COMMENT OUT MAYBE
    // Secret for session, you will want to change this and make it an environment variable
    /*
    secrets: {

        session: 'dashboard-secret'
    },
    
    // List of user roles
    userRoles: ['guest', 'user', 'admin'],
    */
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
    all,
  require('./' + process.env.NODE_ENV + '.js') || {});