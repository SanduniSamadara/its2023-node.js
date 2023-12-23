const fs = require('fs')

fs.readFile('doc.txt',(err, data) =>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});
console.log("Called!!"); // print first because read file might take some time . Asynchronous

const read = fs.readFileSync('doc.txt');
console.log("SY: ",read.toString());

console.log("Called2!!");