const fs = require('fs')

//////////////////////// read file ////////////////////////////////////
/**
 * async - non block
 * */
fs.readFile('doc.txt',(err, data) =>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});
console.log("Called!!"); // print first because read file might take some time . Asynchronous

/**
 * sync - block
 * */
const read = fs.readFileSync('doc.txt');
console.log("SY: ",read.toString());

console.log("Called2!!");


/////////////////////////////// write file ////////////////////////////////////////
fs.writeFile('doc.txt','Welcome to NodeJS', () =>{
    console.log("Updated!!")
})


/////////////////////////////// create directory ////////////////////////////////////////
fs.mkdir('./doc',(err =>{
    console.log("Created!!");
}))
