'use strict'
var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

var Clock = function() {
    var self = this;

    setInterval( function() {
        // console.log('hola');
        self.emit('tictact');
    }, 1000);
}

inherits(Clock, EventEmitter);

Clock.prototype.theTime = function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var message = `${hours}:${minutes}:${seconds}`;

    console.log(message);
};

var cucu = new Clock();

cucu.on('tictact', function() {
    cucu.theTime();
});