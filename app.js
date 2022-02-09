const Logger = require('./logger')
const os = require('os');
const fs = require('fs');
const http = require('http');

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

const logger = new Logger()

// Register a listener
logger.on('messageLogged', (arg)=>{
    console.log('Listener called',arg);
})

logger.log('message')

// emit means making a noise or producing something.

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('Hello, Welcome to this little localhost server!!!!!');
        res.end()
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,4,5,6]))
        res.end()
    }
})

server.listen(9000);
console.log('Listening on port 9000.....');