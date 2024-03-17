const os = require('os') ;
const path = require('path');
const math = require('./export')

// // node JS global oject
// console.log(global);

// // Node JS Core Module
// console.log(os.type() ,os.version() ,os.homedir() ,os.networkInterfaces());
// // path module
// console.log(path);
// console.log(path.parse(__filename));
// // deafult values Node provide
// console.log(__dirname);
// console.log(__filename)
// using imported exported functions
console.log(math.add(1,2), math.sub(12,100) , math.mul(9,2) , math.div(14,7))
