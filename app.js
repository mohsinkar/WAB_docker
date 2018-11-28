var fs = require('fs');
var http = require('http');
var express = require('express');
var helmet = require('helmet');


var app = express();
app.use(express.static('./'));
app.use(helmet());



// your express configuration here

var httpServer = http.createServer(app);
httpServer.listen(3344);

console.log('Server running at http://127.0.0.1:3344/');
   
