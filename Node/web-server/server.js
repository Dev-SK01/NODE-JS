const http = require('http');
const PORT = 2000 ;
const fs = require('fs');

const server = http.createServer((req ,res) =>{
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
    }else{
        console.log('Server Is Running On ' + PORT);
    }
});