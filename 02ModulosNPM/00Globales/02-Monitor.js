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

    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile('./assets/index.html', readFile);
}

http.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});