'use strict'

var http = require('http');
var htmlCode = '';
var options = {
    host: 'jonmircha.com',
   /// port: 443,
    path: '/'
};


function httpClient(res) {
    console.log(`El sitio ${options.host} ha respondido. Código de Estado: ${res.statusCode}`);

    res.on('data', function(data) {
        htmlCode += data;
        // console.log(data);
        console.log( data.toString() );
    })
}

function httpError(err) {
    console.log(`El sitio ${options.host} no respondió. Código de Estado: ${err.statusCode}`);
}

function webServer(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(htmlCode);
}

// Instancia cliente de HTTP.
http
    .get(options, httpClient)
    .on('error', httpError)

// Instancia de servidor de HTTP.
http
    .createServer(webServer)
    .listen(3000)


console.log('Servidor corriendo en http://localhost:3000/')