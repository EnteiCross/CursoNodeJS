'use strict'

var express = require('express'),
    router = express.Router()

router.get('/', (req, res) => {
    res.end('<h1>Terminamos la configuraci&oacute;n de nuestra primer App en Express.js</h1>')
} );

module.exports = router;