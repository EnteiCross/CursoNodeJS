const http = require('http').createServer();

const hostname = 'localhost';
const port = 3000;
var server;

function webServer(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hola Node.js </h1>');
}

http
    .on('request', webServer)
    .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});