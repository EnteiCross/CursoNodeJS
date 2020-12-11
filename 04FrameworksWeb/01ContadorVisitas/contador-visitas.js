'use strict'

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

app
    .use( cookieParser() )
    .use( cookieSession( {
        name: 'session',
        keys: ['key1', 'key2']
    } ) )
    .get('/', (req, res) => {
        // IF               || else
        req.session.visitas || (req.session.visitas = 0)
        let n = req.session.visitas++;
        res.end(`<h1>Hola mundo desde express c8 para el contador</h1>
                  <h2> Me haz visitado ${n} veces.</h2>
        `);
    })
    .listen(3000)

console.log('Express initialized on port 3000');

