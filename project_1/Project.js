const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {

    if(req.url === '/') {
        fs.readFile('Home.html', (err,data)=>{
            if (err) res.end("Error !!!");
            else {
                res.writeHead(200, {'content-type' : 'text/html'});
                res.end(data);
            }
        });
    }
    else if(req.url === '/about') {
        fs.readFile('About.html', (err,data)=>{
            if (err) res.end("Error !!!");
            else {
                res.writeHead(200, {'content-type' : 'text/html'});
                res.end(data);
            }
        });
    }
    else if(req.url === '/help') {
        fs.readFile('Help.html', (err,data)=>{
            if (err) res.end("Error !!!");
            else {
                res.writeHead(200, {'content-type' : 'text/html'});
                res.end(data);
            }
        });
    }
    else if(req.url === '/data') {
        fs.readFile('Data.json', (err,data)=>{
            if (err) res.end("Error !!!");
            else {
                res.writeHead(200, {'content-type' : 'application/json'});
                res.end(data);      
            }
        });
    }
    else if(req.url === '/api') {
       const obj = {
        name : "krishna thakkar",
        age : 21,
        city : "Ahemdabad"
       };
       res.writeHead(200, {'content-type' : 'application/json'});
       res.end(JSON.stringify(obj));
    }

    
    else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end("404 error Page not found!!!");
    }

}).listen(5000, () => {
    console.log("Server is running at http://localhost:5000")
});