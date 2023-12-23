const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) =>{
    console.log('req: ',request.url);
    console.log('res: ',response);
    /* response.setHeader('Content-Type', 'text/plain');
     response.write('Hello IJSE');
     response.end();*/

    response.setHeader('Content-Type', 'text/html');
    // response.write('<h1>Hello IJSE</h1>');
    // response.end('<h1>Hello IJSE</h1>');


    let file = 'index.html';

    switch (request.url){
        case '/':
            response.statusCode=200;
            //response.end('\'<h1>Home</h1>\'');
            file = 'index.html';
            break;
        case '/about':
            response.statusCode=200;
            //response.end('<h1>About</h1>');
            file = 'about.html';
            break;
        case '/career':
            response.statusCode=200;
            file = 'career.html';
            break;
        default:
            response.statusCode=404;
            file = '404.html';
            break;
    }
    fs.readFile(`./views/${file}`,(err,data) =>{
        if (err){
            response.end('<h1>Sorry!Something went wrong</h1>');
        }else{
            response.end(data);
        }
    })
});

server.listen(8081, 'localhost', () =>{
    console.log("Server Started!!");
});