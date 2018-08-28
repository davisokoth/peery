var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

app.get('/', function(req, res, next) { res.sendFile(__dirname + '/index.html'); });

// =======

var server = app.listen(process.env.PORT || 3000)

var options = {
    debug: true
}

var peerserver = ExpressPeerServer(server, options);

app.use('/api', peerserver);

// == OR ==
/*
var server = require('http').createServer(app);
var peerserver = ExpressPeerServer(server, options);

app.use('/peerjs', peerserver);

server.listen(9000);
*/