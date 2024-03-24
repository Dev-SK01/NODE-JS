const fs = require('fs');
const fsPromise  = require('fs').promises;
const path = require('path');
const {v4:uuid} = require('uuid');
const Emitter = require('events')

class Myemitter extends Emitter {}; // event emitter class from events core module

const myEmitterObj = new Myemitter(); // creating that class to object

myEmitterObj.on('log' ,(message) =>{
    logEvent(message);
});

myEmitterObj.emit('log' , 'Event Emitted!') // emits the event this trigger the listner on

async function logEvent(message) {
    const date = new Date().toDateString();
    const logData = `${date}\t${uuid()}\t${message}\n`
    if(!fs.existsSync(path.join(__dirname, '/log'))){
        await fsPromise.mkdir(path.join(__dirname ,'log'))
    }
    try{
        fsPromise.appendFile(path.join(__dirname , '/log' , 'logs.txt'),logData)
    }catch(err){
        console.error(err);
    }
    console.log(logData);
}

module.exports = {myEmitterObj} ;