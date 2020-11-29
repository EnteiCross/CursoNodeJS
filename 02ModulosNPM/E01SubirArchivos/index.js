'use strict'

let http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra');

function serverUpload(req, res) {
    if ( req.method.toLowerCase() === 'get' && req.url === '/' ) {
        let vista = fse.readFileSync('./views/index.html');
        res.writeHead( 200, {'Content-Type': 'text/html'});
        res.write(vista);
        res.end();
    }

    if ( req.method.toLowerCase() === 'post' && req.url === '/upload' ) {
        let form = formidable.IncomingForm();
        let archivos = [];

        form
            .parse(req, function(err, fields, files) {
                let vista = fse.readFileSync('./views/filesuploaded.html');
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(vista);
                res.end();
            })
            .on('progress', function(bytesReceived, bytesExpected) {
                let percentCompleted = (bytesReceived/bytesExpected) * 100;
                if ( percentCompleted % 5 === 0 )
                    console.log(percentCompleted.toFixed());
            })
            .on('error', function(err) {
                console.log(err);
            })
            .on('file', function(fieldName, file) {
                archivos.push({ fieldName, file });
            })
            .on('end', function(fields, files) {
                for( let archivo of archivos ) {
                    let tempPath = archivo.file.path;
                    let fileName = archivo.file.name;
                    let newLocation = `./upload/${fileName}`;

                    fse.copy(tempPath, newLocation, (err) => {
                        return (err) ? console.log(err) : console.log(`El archivo ${fileName} se ha subido con éxito!`);
                    })
                }
            } )
    }
}

http.listen(3000);
console.log('Server created at http://localhost:3000');