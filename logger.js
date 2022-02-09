let url = 'https://mylogger.io/log';

const log= message => {
    // send an HTTP request
    console.log(message);
}

module.exports = log;