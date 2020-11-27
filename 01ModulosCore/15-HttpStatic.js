'use strict'

var http = require('http').createServer(webServer);
var fs = require('fs');
var path = require('path');
var url = require('url');
var urls = [
    {
        id: 1,
        route: '',
        output: 'assets/index.html'
    },
    {
        id: 2,
        route: 'acerca',
        output: 'assets/acerca.html'
    },
    {
        id: 3,
        route: 'contacto',
        output: 'assets/contacto.html'
    }
];

function webServer(req, res) {
    var pathUrl = path.basename(req.url);
    var id = url.parse( req.url, true ).query.id;

    console.log(`path: ${pathUrl}, id: ${id}`);

    urls.forEach(function(pos) {
        if (pos.route == pathUrl || pos.id == id) {
            res.writeHeader(200, 'Content-Type', 'text/html');

            fs.readFile(pos.output, function(err, data) {
                if (err) throw err;
                
                res.end(data);
            });
        }
    });

    if (!res.finished) {
        res.writeHeader(404, 'Content-Type', 'text/html');

        fs.readFile('assets/404.html', function(err, data) {
            if (err) throw err;

            res.end(data);
        });
    }
}


http.listen(3000);
console.log(`Server running at http://localhost:3000/`);