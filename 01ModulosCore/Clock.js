'use strict'

class Clock {
    constructor() {
        setInterval( () => {
            this.theTime();
        }, 1000);
    }

    theTime() {
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
}

module.exports = Clock;