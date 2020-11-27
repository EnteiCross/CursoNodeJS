/*
Streams
    Flujo de información que se transmiten en pedazos (Chunks)
    3 tipos: Lectura / Escritura / Duplex
    Instancias de EventEmitter

    Acceso asincrono
    
    Es raro crear streams directamente
    Pero muchos recursos nos ofrecen este interfaz
    Detrás de muchos mecanismos de Node.JS
        ► stdin/stdout
        ► request de HTTP
        ► Sockets
        ► Manipulación de ficheros/imágenes
*/

'use strict'

var fs = require('fs');
var readStream = fs.createReadStream('assets/nombres.txt');
var writeStream = fs.createWriteStream('assets/nombres_copia.txt');

/*
readStream.pipe(writeStream);

readStream.on('data', function(chunk) {
    console.log( 'He leido: ',
                 chunk.length,
                 'caracteres.'
                )
});

readStream.on('end', function() {
    console.log('Terminé de leer el archivo.');
});
*/

readStream.pipe(writeStream)

readStream
    .on('data', function(chunk) {
        console.log( 'He leido: ',
                    chunk.length,
                    'caracteres.'
                    )
    })
    .on('end', function() {
    console.log('Terminé de leer el archivo.');
})