var fs = require("fs");
console.log("Program started");
fs.readFile("test.txt", function(err1, data1) {
  fs.readFile("test2.txt", function(err2, data2) {
    if (err1 || err2) return console.error(err1 || err2);
    console.log(data1.toString());
    console.log(data2.toString());
    console.log("Program ended");
  });
});
