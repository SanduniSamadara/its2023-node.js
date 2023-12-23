console.log("Welcome to NodeJS");
const name = "IJSE";
console.log('Institute: ',name);

// console.log(global);
global.setTimeout(() => {
    console.log("Timeout!!");
},5000)

global.setInterval(() =>{
    console.log("Interval!!");
},3000);