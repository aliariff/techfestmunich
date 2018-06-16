var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;
var allClients = {}

server.listen(port, function() {
    console.log("listening");
});

app.get('/', function(req, res) {
    res.send("It's work");
});

io.on('connection', function(socket) {
    var clientId = socket.handshake.query.clientId;
    allClients[clientId] = socket;
    console.log(`client ${clientId} connected`);

    socket.on('car_event', function(data) {
        console.log(data);
        if (data['status'] == 'obstacle') {
            io.sockets.emit('slow_down', {
                speed: -10
            });
        }
    });
});

function test() {
    //slow down Truck 1

    var pos1 = data['position'];
    var v1 = data['speed'];
    var obstaclepos = data['obstacleposition'];

    var distToObst = obstaclepos - pos1;

    var safetydistance1 = 0; // to obstacle

    var sddistance1 = distToObst - safetydistance;

    dt1 = sddistance11 / v1;

    var targetID = 1;

    io.sockets.emit('slow_down', {
        id: targetID,
        speed: -v1,
        time: dt1
    });

    //slow down Truck 2

    data2 = get(Truck2.info)
    var pos2 = data2['position'];
    var v2 = data2['speed'];

    var safetydistance2 = 10;

    var sddistance2 = obstaclepos - pos2 - ssdistance2;

    dt2 = sddistance2 / v2;

    var targetID2 = 2;

    io.sockets.emit('slow_down', {
        id: targetID2,
        speed: -v2,
        time: dt2

    });

    //same for Truck 3
}