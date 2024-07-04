const os = require('os');

/*
console.log("Architecture: ", os.arch()); // x64
console.log("Platform: ", os.platform()); // Win
console.log("Release: ", os.release());   // 10.0.19045
console.log("Uptime:", os.uptime());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
*/

console.log(os.networkInterfaces());
