/**
 * Main application file
 */

'use strict';

// SET NODE DEFAULT ENVIRONMENT
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
var express = require('express');
//  CREATES A MERGED CONFIG FILE BASED ON THE ENVIRONMENT BEING RUN
//  TEST, DEVELOPMENT, PRODUCTION
var config = require('./config/environment');

// SET UP EXPRESS
var app = express();
//  CREATE THE SERVER
var server = require('http').createServer(app);

//  CONFIGURE EXPRESS
require('./config/express')(app);
//  CONFIGURE ANY SERVER ROUTING
require('./api/twitter')(app);
// START SERVER
server.listen(config.port, '127.0.0.1', function () {
    console.log('Server listening on %d, in %s mode', config.port, app.get('env'));
});

// EXPOSE APP
exports = module.exports = app;