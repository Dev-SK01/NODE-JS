const fs = require('fs');
const path = require('path');

if(!fs.existsSync(path.join(__dirname, '../textFiles', 'ReadStream.txt'))){

    const readStream = fs.createReadStream(path.join(__dirname, '../textFiles', 'ReadStream.txt') , {encoding:'utf8'});

    const writeStream = fs.createWriteStream(path.join(__dirname, '../textFiles', 'WriteStream.txt'));
    
    // pipe the streams
    readStream.pipe(writeStream);
}else{
    console.log('WriteFile Already Exist')
}

// let text = "---------------------- Node Package Manager ---------------------"
// fs.writeFile(path.join(__dirname , '../textFiles','NPM.txt') ,text,(err)=>{
// try{
//     if (err) throw err
//     console.log('File Created!');
// }catch(err){
//     console.log(err)
// }
// })