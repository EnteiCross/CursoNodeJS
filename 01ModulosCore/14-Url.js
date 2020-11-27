/*
URL
https://nodejs.org/api/url.html
Este módulo dispone de utilidades para la resolución y análisis de URLs.

Query String
https://nodejs.org/api/querystring.html
Este módulo proporciona utilidades para hacer frente a las cadenas de consulta.
*/
'use strict'

var http = require('http').createServer(webServer);
var path = require('path');
var url = require('url');
var urls = [
    {
        id: 1,
        route: '',
        output: '<h2> Home </h2>'
    },
    {
        id: 2,
        route: 'acerca',
        output: '<h2> Acerca de... </h2>'
    },
    {
        id: 3,
        route: 'contacto',
        output: '<h2> Contacto: </h2>'
    }
];

function webServer(req, res) {
    var message = '<h1>Hola Node.js</h1>';
    var pathUrl = path.basename(req.url);
    var id = url.parse( req.url, true ).query.id;

    console.log(`path: ${pathUrl}, id: ${id}`);

    urls.forEach( function(pos) {
        if (pos.route == pathUrl || pos.id == id) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(message + pos.output);
        }
    });

    if (!res.finished) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Error 404: Not Found</h1>');
    }
}


http.listen(3000);
console.log(`Server running at http://localhost:3000/`);