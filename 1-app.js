const os = require('os');

/*console.log("Welcome to NodeJS");
const name = "IJSE";
console.log('Institute: ',name);*/

// console.log(global);
/*
global.setTimeout(() => {
    console.log("Timeout!!");
},5000)

global.setInterval(() =>{
    console.log("Interval!!");
},3000);
*/

/**
 * Environmental Variables
 * */

// console.log(__dirname); // absolut path to the directory
// console.log(__filename); // absolute path to the file
//
// console.log("Welcome Nodemon");

/**
 * in-build modules
 * */

console.log(os.platform()); // Returns a string identifying the operating system platform for which the Node.js binary was compiled. platform of the os
console.log(os.version()); // return the version
console.log(os.release()); // return the released v
console.log(os.homedir()); // Returns the string path of the current user's home directory.