var http = require("http");
http
  .createServer(function(request, response) {
    //eEnd the HTTP header. HTTP STatus: 200=OK
    //Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/plain" });
    //Send the response body as "Hello World"
    response.write("Welcome to the course");
    response.end("Hello World!\n");
  })
  .listen(8081);

//Console will print the message
console.log("Server running at http://127.0.0.1:8081/");
