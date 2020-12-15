'use strict'

var express = require('express'),
    router = express.Router()

function jade(req, res, next) {
    let locals = {
        title: 'Jade c9',
        link: 'http://jade-lang.com/',
        description: `Jade es un "template entine" de alto performance,
            enfocado en permitir escribir código HTML de forma rápida.
            Podríamos decir que se trata de un pre-procesador de código HTML;
            Similar a stylus, sass o less con respecto a CSS. Jade es fuertemente influenciado
            por HAML e implementado para Javascript con Node. Jade una la identación para definir
            la jerarquía de nuestro documento HTML, no tendremos que escribir tags HTML, estos serán
            generados por jade al momento de compilar nuestro código Jade.`
    };
    res.render('index', locals)
}

router
    .get('/', (req, res) => {
        res.end('<h1>Terminamos la configuraci&oacute;n de nuestra primer App en Express.js</h1>')
    } )
    .get('/jade', jade)


module.exports = router;