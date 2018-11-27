var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express');
var helmet = require('helmet');

var privateKey  = fs.readFileSync('privatekey.key', 'utf8');
var certificate = fs.readFileSync('certificate.crt', 'utf8');

var app = express();
app.use(express.static('./'));
app.use(helmet());

var credentials = {key: privateKey, cert: certificate};


// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(3344);
   
