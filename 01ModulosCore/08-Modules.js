'use strict'
// var myData = require('./my-data');
/*
console.log(myData.name);
console.log(myData.email);
console.log(myData.phone);
*/

// var Clock = require('./Clock-ES5'); // Reloj con Ecma Script 5.
var Clock = require('./Clock-ES6');

var cucu = new Clock();

cucu.on('tictact', function() {
    cucu.theTime();
});
