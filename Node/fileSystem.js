const fs = require('node:fs');
const path = require('path');


fs.readFile(path.join(__dirname, '../textFiles', 'nodeJS.txt'), (err, data) => {
    if (err) throw err
    // JS methos to try catch 
    try {
        console.log('\tBuffer Data : \n\n', data)
        console.log('\tActual Data : \n\n', data.toString())
    } catch (err) {
        console.err(err)
    }
});
console.log(__dirname)
// Handling the errors 

process.on('uncaughtException', (err) => {
    console.error(err);
    process.exit(1);
});
// writting the file 

fs.writeFile(path.join(__dirname, '../textFiles', 'write.txt'), "console.log('File Writed')", (err) => {
  if(err) throw err
  console.log('Write SuccessFull!');
  fs.appendFile(path.join(__dirname, '../textFiles', 'write.txt') ,"\nconsole.log('File appended')",(err) =>{
    if(err) throw err
    console.log('Appeded');
    // fs.rename(path.join(__dirname, '../textFiles', 'write.js'), path.join(__dirname, '../textFiles', 'write.txt'),(err)=>{
    //     if(err) throw err
    //     console.log('File renamed Write.txt')
    // })
  })
});