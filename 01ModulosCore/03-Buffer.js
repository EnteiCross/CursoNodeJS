/*
    Buffers
        Es una tira de bytes (datos binarios)
        similar a un array de enteros de tamaño fijo.
        
        Puede manirpular datos directamente:
            ► Sockets
            ► Streams
            ► Implementar protocolos complejos
            ► Manipulación de ficheros o imagenes.
            ► Criptografia
*/

'use stric'

var buf = new Buffer.alloc(100);
var buf2 = new Buffer.alloc(26);
var str = '\u00bd + \u00bc = \u00be';

buf.write('abcd', 0, 4, 'ascii' );

console.log(buf);

console.log( buf.toString('ascii'));


console.log(str);

console.log( str.length + ' caracteres');
console.log(Buffer.byteLength(str, 'utf8') + ' bytes');


for (i = 0; i<buf2.length; i++) {
    buf2[i] = i + 97;
}

console.log( buf2.toString('ascii'));