'use strict';

//  SET UP DB CONNECTION STRINGS OR OTHER ENVIRONMENT SPECIFIC VARIABLE
module.exports = {
    // SERVER IP
    ip: process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,
    
    // SERVER PORT
    port: process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            1337
};