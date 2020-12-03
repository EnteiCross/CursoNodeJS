'use strict';

let fs = require('fs');
let filePath = './Assets/nombres.txt';
let newFilePath = './Assets/nombres_callbacks.txt';

fs.access(filePath, fs.F_OK, function(err) {
    if (err) {
        console.log('El archivo no existe.');
        return;
    }

    console.log('El archivo SI existe. :)');

    fs.readFile(filePath, function(err, data) {
        if (err) {
            console.log('El archivo no se pudo leer.');
            return;
        }

        console.log('El archivo se ha leido exitosamente :)');
        fs.writeFile(newFilePath, data, function(err) {
            return console.log( (err) ? 'El archivo no se pudo copiar.' : 'El archivo se ha copiado con exito' );
        });
    });

});