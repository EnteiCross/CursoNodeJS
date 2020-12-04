'use strict';

let fs = require('fs');
let file = './assets/nombres.txt';
let newFile = './assets/nombres-promises-ES6.txt';
let promise = new Promise((resolve, reject) => {
    fs.access(file, fs.F_OK, (err) => {
        return (err) ? reject(new Error('El archivo no existe.')) : resolve(true);
    });
});

promise
    .then( (dataPromise) => {
        console.log('El archivo existe');
        return new Promise((resolve, reject) => {
            fs.readFile(file, (err, data) => {
                return (err) ? reject(new Error('El archivo no se pudo léer.')) : resolve(data);
            })
        })
     })
    .then( (dataPromise) => {
        console.log('El archivo se ha leido exitosamente.');
        return new Promise((resolve, reject) => {
            fs.writeFile(newFile, dataPromise, function(err) {
                return (err) ? reject(new Error('El archivo no se pudo copiar.')) : resolve('El archivo se ha copiado con exito.');
            })
        })
     })
    .then( (dataPromise) => {
        console.log(dataPromise);
     })
    .catch( (err) => {
        console.log(err.message);
    })