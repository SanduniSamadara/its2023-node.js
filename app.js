const fs = require('fs')

fs.readFile('doc.txt',(err, data) =>{
    console.log(data.toString());
})