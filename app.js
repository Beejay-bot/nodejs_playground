const log = require('./logger')
const os = require('os');
const fs = require('fs');
const EventEmitter =  require('events');

// interacting with os systems 
const totalmemorty = os.totalmem()
const freeMemory = os.freemem();
const deviceOsType = os.type();

console.log(`Total memory: ${freeMemory}, total memory:${totalmemorty}, OS type: ${deviceOsType}`)

// Reading file dir in a system.
fs.readdir('./', (err,files) =>{
    if (err) console.log('Error',err);
    else console.log('Result', files);
})

const emitter =  new EventEmitter();

// Register a listener
emitter.on('messageLogged', (arg)=>{
    console.log('Listener called',arg);
})

emitter.emit('message logged', {id:1, url: 'http://'});

// emit means making a noise or producing something.