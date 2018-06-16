var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;
var allClients = {}
var Computation = require('../MathProcessing/Computation');

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

        //---------------------------------------------------------------
        ///console.log(data);
        //--- Storing relevant cars' events
        if (data['car_id'] == '1') {
            var carOneLastevent = data;
            ///console.log(carOneLastevent);
        } else if (data['car_id'] == '2') {
            var carTwoLastevent = data;
            ///console.log(carTwoLastevent);
        } else if (data['car_id'] == '3') {
            var carThreeLastevent = data;
            ///console.log(carThreeLastevent);
        }

        //---------------------------------------------------------------
        if (data['status'] == 'obstacle') {

            //--- Process car event from cars 1 and 2
            // Calculation ...
            allClients['car_2'].emit('slow_down', {
                velocity: -20
            });

            //--- Process car event from cars 2 and 3
            // Calculation ...
            allClients['car_3'].emit('slow_down', {
                velocity: -10
            });
            //---------------------------------------------------------------

        }
    });
});