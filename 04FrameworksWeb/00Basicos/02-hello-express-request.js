'use strict'

var express = require('express');
var app     = express();

app
    .get('/', (req, res) => {
        res.end('<h1>Hola mundo desd el 02-helloexpresRequest.js</h1>');
    })
    // user/98502093-Luis-27
    .get('/user/:id-:name-:age', (req, res) => {
        res.end(`<h1> ${req.params.name} bienvenido a express, tu ID es <b>${req.params.id}</b>
                <br>y tienes ${req.params.age} a&ntilde;os
                </h1>`);
    })
    .get('/search', (req, res) => {
        res.end(`
            <h1>
                Bienvenido a Express, los resultados de tu b&uacute;squeda son:
                <mark>${req.query.s}</mark>
            </h1>
        `);
    })
    .listen(3000)

    console.log('Express initialized on port 3000. ☺');

