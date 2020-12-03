'use strict';

let fs = require('fs');
let Q = require('q');
let file = './assets/nombres.txt';
let newFile = './assets/nombres-promises-q.txt';

function existFile(file) {
    let defer = Q.defer();
    fs.access(file, fs.F_OK, (err) => {
        return (err) ? defer.reject(new Error('El archivo no existe.')) : defer.resolve(true);
    });

    return defer.promise;
}

function readFile(file) {
    let defer = Q.defer();

    console.log('El archivo existe');
    fs.readFile(file, (err, data) => {
        return (err) ? defer.reject(new Error('El archivo no se pudo léer.')) : defer.resolve(data);
    })

    return defer.promise;
}

function writeFile(file, data) {
    let defer = Q.defer();
    console.log('El archivo se ha leido exitosamente.');
    fs.writeFile(file, data, (err, data) => {
        return (err) ? defer.reject(new Error('El archivo no se pudo copiar.')) : defer.resolve('El archivo se ha copiado con exito.');
    })

    return defer.promise;
}


existFile(file)
    .then( () => { return readFile(file); } )
    .then( (dataPromise) => { return writeFile(newFile, dataPromise); } )
    .then( (dataPromise) => { return console.log(dataPromise); } )
    .fail( (err) => { return console.log(err.message); } )