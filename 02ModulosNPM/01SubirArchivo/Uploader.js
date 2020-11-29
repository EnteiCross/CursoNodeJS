'use strict'

let http = require('http').createServer(serverUpload);
let util = require('util');
let formidable = require('formidable');
let fse = require('fs-extra');


function serverUpload(req, res) {
    if (req.method.toLowerCase() == 'get' && req.url== '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <h1> Uploader de Archivo de Node.js </h1>
            <form action="/upload" enctype="multipart/form-data" method="post">
            <div> <input type="file" name="upload" multiple="multiple" required> </div>
            <div> <input type="submit" value="Subir Archivo"> </div>
            </form>
        `);
    }

    if (req.method.toLowerCase() == 'post' && req.url == '/upload') {
        let form = formidable.IncomingForm();

        form
            .parse(req, function(err, fields, files) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write( `
                            <h1>Archivos recibidos</h1>
                            <br>
                            <code>${util.inspect( {files: files} )}</code>
                            <br> <a href=/>Regresar</a>` );
                res.end();
            })
            .on('progress', function(bytesReceived, bytesExpected) {
                let percentCompleted = (bytesReceived/bytesExpected) * 100;
                console.log(percentCompleted.toFixed());
            })
            .on('error', function(err) {
                console.log(err);
            })
            .on('end', function(fields, files) {
                let tempPath = this.openedFiles[0].path; // Ubicación temporal del archivo que se sube.
                let fileName = this.openedFiles[0].name; // Nombre del archivo subido
                let newLocation = `./upload/${fileName}`; //Nueva ubicación

                console.log(tempPath);

                fse.copy(tempPath, newLocation, function(err) {
                    return (err) ? console.log(err) : console.log('El archivo se subió con éxito! :)');
                })
            })

        return;
    }
}

http.listen(3000);
console.log('Server created at http://localhost:3000');
