'use strict'

var express = require('express');
var app     = express();

app
    .get('/', (req, res) => {
        res.send('<h1>Bienvenido mundo desde Express</h1>')
    })
    .get('/bextlan', (req, res) => {
        //res.send('<h1>Bienvenidos a Bextlán... Lugar de bits, vectores y pixeles</h1>');
        res.redirect(301, 'https://www.google.com/');
    })
    .get('/json', (req, res) => {
        res.json({
            name: "Luis",
            age: 27,
            twitter: "@im_gh0zt"
        });
    })
    .get('/render', (req, res) => {
        // res.render('./assets/index.html')
        // res.render(`${__dirname}/assets/index.html`)
        // Pendiente
    })

    .listen(3000)

console.log('Iniciando Express en el puerto 3000.');