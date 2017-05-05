require('ts-node/register');
var serve = require('./server.ts').serve;

var port = process.env.PORT || 8080;
serve(port);