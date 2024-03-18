const filePromise = require('fs').promises ;
const path = require('path');

const fileOperations = async () =>{
   try{
    await filePromise.writeFile(path.join(__dirname, '../textFiles', 'FilePromise.txt') , "File Created using Promises"); console.log('File Created');
    
    await filePromise.appendFile(path.join(__dirname, '../textFiles', 'FilePromise.txt') , "\nFile Updated Using Promise"); console.log('File Updated');

    await filePromise.rename(path.join(__dirname, '../textFiles', 'FilePromise.txt') , path.join(__dirname, '../textFiles', 'FilePromise.py') ); console.log('File Renamed');

    const data = await filePromise.readFile(path.join(__dirname, '../textFiles', 'FilePromise.py') , 'utf8');
    console.log(data);

    await filePromise.unlink(path.join(__dirname, '../textFiles', 'FilePromise.py'));
    console.log('File Deleted');
   }catch(err){
     console.error(err);
   }
};

fileOperations()