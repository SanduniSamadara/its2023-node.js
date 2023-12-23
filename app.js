//import
const express = require('express')

// invoke the express
const app = express();

// run the server
app.listen(8081);

app.get('/',(req,resp) =>{
    resp.send("hello");
});

app.get('/about',(req,resp) =>{
    resp.send("about");
});

app.get('/career',(req,resp) =>{
    resp.send("career");
});

app.use((req, resp) =>{
    resp.send("404");
});