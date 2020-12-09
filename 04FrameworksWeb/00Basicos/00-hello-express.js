'use strict'

var express = require('express');
var app     = express();

app
    .get('/', (req, res) => {
        res.end( '<h1>Hola mundo desde Express</h1>');
    })
    .listen(3000)

console.log('Express initialized on port 3000!');