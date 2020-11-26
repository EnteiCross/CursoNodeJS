const http = require('http').createServer(webServer);
var fs = require('fs');
var index = fs.createReadStream('./assets/index.html');

const hostname = 'localhost';
const port = 3000;
var server;

function webServer(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    index.pipe(res);
}

http.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});