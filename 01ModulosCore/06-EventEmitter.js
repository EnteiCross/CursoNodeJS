'use strict'

var EventEmitter = require('events').EventEmitter;
var pub = new EventEmitter();

pub
    .on('myEvent', function(message) {
    console.log(message);
    })
    .once('myEvent', function(message) {
        console.log('Se emite la primera vez');
    })

pub.emit('myEvent', 'Soy un emisor de eventos...');
pub.emit('myEvent', 'Volviemto a emitir');
// pub.removeAllListeners('myEvent');
pub.emit('myEvent', 'Volviendo a emitir por tercera vez');
