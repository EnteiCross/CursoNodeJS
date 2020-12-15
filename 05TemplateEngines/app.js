'use strict'

var express = require('express'),
    favIcon = require('serve-favicon'),
    morgan = require('morgan'),
    jade    = require('jade'),
    routes  = require('./routes/index'),
    faviconUrl = `${__dirname}/public/img/node-favicon.png`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.port || 3000),
    app = express();


app
    // Configurando app
    .set('views', viewDir)
    .set('view engine', 'jade')
    .set('port', port)
    // Ejecutando middlewares
    .use( favIcon(faviconUrl) )
    .use( morgan('dev') )
    .use(publicDir)
    // Ejecutando el middleware Enrutador
    .use('/', routes)

module.exports = app;
