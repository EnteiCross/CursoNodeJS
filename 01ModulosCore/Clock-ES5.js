'use strict'

var Clock = (function() {
    var EventEmitter = require('events').EventEmitter;
    var inherits = require('util').inherits;
    
    // Constructor
    var Clock = function() {
        var self = this;
    
        setInterval( function() {
            self.emit('tictact');
        }, 1000);
    }
    
    inherits(Clock, EventEmitter);
    
    Clock.prototype.theTime = function() {
        var date = new Date();
        var hoursMeridiano = date.getHours() - ( (date.getHours()) > 12 ? 12 : 0 );
        var hours   = addZero( hoursMeridiano );
        var minutes = addZero( date.getMinutes() );
        var seconds = addZero( date.getSeconds() );
        var meridiano = ( date.getHours() < 12 ) ? 'AM' : 'PM';

        function addZero(number) {
            return (number < 10) ? `0${number}` : number;
        };
        
        var message = `${hours}:${minutes}:${seconds} ${meridiano}`;

    
        console.log(message);
    };

    return Clock;
})();

module.exports = Clock;
