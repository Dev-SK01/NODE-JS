const fs = require('node:fs');
const path = require('path');


fs.readFile(path.join(__dirname ,'../textFiles' ,'nodeJSs.txt') , (err , data) =>{
    if(err) throw err
    // JS methos to try catch 
    try{
        console.log('\tBuffer Data : \n\n' , data)
        console.log('\tActual Data : \n\n' ,data.toString())
    }catch(err){
        console.err(err)
    }
    
});
console.log(__dirname)
// Handling the errors 

process.on('uncaughtException' , err =>{
    console.error(err);
    process.exit(1);
})