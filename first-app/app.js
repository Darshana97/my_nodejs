// function sayHello(name){
//     console.log('Hello ' + name);
// }

// sayHello('Achi');
// console.log(window);

//_______________________________________________
// var message = 'hello world';
// console.log(global.message);


//___________________________________________
// console.log(module);


// _____________________________________
// const log = require('./logger'); 


// log('message');

// _____________________________________
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);
 

// ______________________________________
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory:  + ${totalMemory}`);
// console.log(`free memory: ${freeMemory}`);


// ______________________________________
const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('$',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Result',files);
});