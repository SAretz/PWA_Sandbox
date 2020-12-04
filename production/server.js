var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./server.key', 'utf8');
var certificate = fs.readFileSync('./server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

app.use(express.static('../dist'))

app.get('/test', () => {
    console.log('test')
    return 1;
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpsServer.on('listening', () => {
    console.log('test');
})

httpServer.listen(8080);
httpsServer.listen(8443);
