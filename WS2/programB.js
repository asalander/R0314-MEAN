var fs = require("fs");
console.log("Program started");
fs.readFile("test.txt", results);

for (var i = 0; i < 15; i++) {
  console.log("Node just keeps on going while the file is being read..");
}
function results(err, data) {
  if (err) return console.error(err);
  console.log("Results of file read:");
  console.log(data.toString());
}
