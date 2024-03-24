const http = require('http');
let PORT = process.env.PORT || 20034 ;
const fs = require('fs');
const path = require('path');

const server = http.createServer((req ,res) =>{
    console.log(req.url);
    console.log(req.method);
    const reqFile = req.url ; 
    let extension = path.extname(reqFile); 
    console.log(extension);
    res.writeHead(200 , {'Content-Type' : 'text/html'}); // writes the data bout the file
    fs.readFile('index.html',(err , data)=>{ // reading the html file from device
        if(err){
            res.writeHead(404); // writting head if not html file found
            res.write('Page Not Found !');
        }else{
            res.write(data); // writting the data inside the html file
        }
        res.end();
    });
});

server.listen(PORT, (err) =>{
    if(err){
        console.error(err);
        if(err.code == 'EADDRINUSE'){
            PORT = PORT+1;
        }
    }else{
        console.log('Server Is Running On ' + PORT);
    }
});