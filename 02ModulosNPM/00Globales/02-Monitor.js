'use strict'

var http = require('http').createServer(webServer);
var fs = require('fs');

const hostname = 'localhost';
const port = 3000;

function webServer(req, res) {
    function readFile(err, data) {
        if (err) throw err;

        res.end(data);
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./assets/index.html', readFile);
}

http.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});