const EventEmitter =  require('events');
let url = 'https://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // send an HTTP request
        console.log(message);

        //Raise an event
        this.emit('message logged', {id:1, url: url});
    }
}

module.exports = Logger;