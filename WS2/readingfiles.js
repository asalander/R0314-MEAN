var fs = require("fs");
console.log("Program started");
var data = fs.readFileSync("test.txt");
console.log(data.toString());
console.log("Program ended");
