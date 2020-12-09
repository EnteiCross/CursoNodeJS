'use strict'

var express = require('express');
var app     = express();

app
    .get('/', (req, res) => {
        res.sendFile(`${__dirname}/assets/index.html`);
    })
    .listen(3000);

console.log('Express initialized on port 3000. ☺');