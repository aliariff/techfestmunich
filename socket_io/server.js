var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;

server.listen(port, function() {
    console.log("listening");
});

app.get('/', function(req, res) {
    res.send("It's work");
});

io.on('connection', function(socket) {
    console.log("client connected");


    socket.on('car_event', function(data) {
        console.log(data);
        if (data['status'] == 'obstacle') {
          io.sockets.emit('slow_down', {
             speed: -10
         });
        }

    });
});
