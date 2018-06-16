var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;
var allClients = {}
var Computation = require('../MathProcessing/Computation');
var tempMemory = {}
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
        if (!(data['car_id'] in tempMemory)) {
            tempMemory[data['car_id']] = [];
        }
        tempMemory[data['car_id']].push(data);
        //---------------------------------------------------------------
        if (data['status'] == 'obstacle') {
            var size = tempMemory[data['car_id']].length
            var lastEvent = tempMemory[data['car_id']][size - 1];
            lastEvent['distances'].forEach(function(item) {
                var car_id = item['car_id']
                var distance = item['distance']
                var car_id_speed = tempMemory[car_id][tempMemory[car_id].length - 1]['speed'];
                var result = Computation.calculate(lastEvent['speed'], car_id_speed, distance, 100);
                console.log(result);
                allClients[`car_${car_id}`].emit('slow_down', result);
            });
        }
    });
});






/*

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
        //console.log(data);
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
          //e.g. params 11m/s , 10m/s , 50m , 30m , 1
          ///console.log(carOneLastevent);
          var result = Computation.calculate (11, 10, 50, 30, 1);
          allClients['car_1'].emit('slow_down', {
             result
          });


          //--- Process car event from cars 1 and 2
          ///console.log(carTwoLastevent);
          allClients['car_2'].emit('slow_down', {
                velocity: -20
          });


          //--- Process car event from cars 2 and 3
          allClients['car_3'].emit('slow_down', {
              velocity: -10
          });

            var distanceBetwenCars1and2 = carOneLastevent['distances'][0]['distance'];
            var distanceToObstacle = 50;
            //console.log(distanceBetwenCars1and2);
            //console.log(distanceToObstacle);

            //var result = Computation.calculate (carOneLastevent['speed'], carTwoLastevent['speed'], distanceBetwenCars1and2, distanceToObstacle, 1);
            /*




            //---------------------------------------------------------------

        }
    });
});
*/
