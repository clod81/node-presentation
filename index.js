http = require ('http');

http.createServer(function(req, res){ // CALLBACK
  console.log("a request just arrived!");
  setTimeout(function(){
   res.writeHead(200, {"ContentType": "text/plain"});
   res.end("Hi there!");
  }, 5000);
}).listen(3000, '127.0.0.1');

console.log("I am running now");
