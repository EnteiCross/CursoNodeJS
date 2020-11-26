/*
    Buffers
        Es una tira de bytes (datos binarios)
        similar a un array de enteros.
        Tamaño fijo.
        Sirve para manipular datos directamente:
            ► Sockets
            ► Streams
            ► Implementar protocolos complejos
            ► Manipulación de ficheros o imagenes.
            ► Criptografia
*/

'use strict'

//var buf  = new Buffer(100);
var buf = new Buffer.alloc(100);
var buf2 = new Buffer.alloc(26);
var str  = '\u00bd + \u00bc = \u00be';

buf.write('abcd', 0, 4, 'ascii');

console.log(buf);
console.log(buf.toString('ascii'));
console.log(str);
console.log(str.length);
console.log(Buffer.byteLength(str, 'utf-8'));
console.log(buf2.length);


/*
for (var i=0; i < buf2.length; i++) {
    buf2[i] = i + 97;
}
*/

for(var i in buf2) {
    if ( i > buf2.length ) continue;
    console.log(i);
    buf2[i] = i + 97;
}

console.log(buf2.toString('ascii'));