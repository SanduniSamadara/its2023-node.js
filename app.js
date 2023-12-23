const fs = require('fs')

//////////////////////// read file ////////////////////////////////////
/**
 * async - non block
 * */
/*
fs.readFile('doc.txt',(err, data) =>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});
console.log("Called!!"); // print first because read file might take some time . Asynchronous

/!**
 * sync - block
 * *!/
const read = fs.readFileSync('doc.txt');
console.log("SY: ",read.toString());

console.log("Called2!!");


/////////////////////////////// write file ////////////////////////////////////////
fs.writeFile('doc.txt','Welcome to NodeJS', () =>{
    console.log("Updated!!")
})


/////////////////////////////// create directory ////////////////////////////////////////
fs.mkdir('./doc1',(err =>{
    console.log("Created!!");
}))


/////////////////////////////// remove directory ////////////////////////////////////////
fs.rmSync('./doc1',{recursive: true,force: true},() =>{});


/////////////////////////////// remove file ////////////////////////////////////////
//async
fs.unlink('.doc2.txt',() =>{
    console.log("Removed the file!!")
});
*/


/////////////////////////////// add new content ////////////////////////////////////////
fs.appendFile('doc3.txt','Welcome', (err) =>{
    if (err){
        console.log(err);
    }else {
        console.log("New File Created!!");
    }
});



/////////////////////////////// add new content in new line ////////////////////////////////////////
if (fs.existsSync('doc3.txt')) {
    fs.appendFile('doc3.txt', '\nIJSE', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("New File Created!!");
        }
    });
}else{
    // code
    }
