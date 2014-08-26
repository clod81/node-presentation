var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log("some sockets connected");
  socket.on('i_am_here', function(here){
    console.log("some socket said it is here");
    io.emit('welcome', "you are connected now");
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
