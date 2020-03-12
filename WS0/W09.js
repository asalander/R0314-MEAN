//var http = require("http");
//http
  .createServer(function(request, response) {
    //SEnd the HTTP header. HTTP STatus: 200=OK
    //Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Big Big World!</h1> ");
    //Send the response body as "Hello World"
    response.end("<h2>Hello World!!</h2>\n");
  })
  .listen(8081);

//Console will print the message
//console.log("Server running at http://127.0.0.1:8081/");
