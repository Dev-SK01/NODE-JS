const fs = require('node:fs');
const path = require('path');


fs.readFile(path.join(__dirname ,'../textFiles' ,'nodeJS.txt') , (err , data) =>{
    if(err) throw err
    console.log('\tBuffer Data : \n\n' , data)
    console.log('\tActual Data : \n\n' ,data.toString())
});
console.log(__dirname)
// Handling the errors 

process.on('uncaughtException' , err =>{
    console.error(err);
    process.exit(1);
})