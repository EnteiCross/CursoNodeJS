'use strict';

const http = require('http');

const hostname = 'localhost';
const port = 3000;
var server;

function webServer(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    debugger;
    res.end('<h1> Hola Node.js </h1>');
}

server = http.createServer( webServer );
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});