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

      //---------------------------------------------------------------
       ///console.log(data);
       //--- Storing relevant cars' events
       if (data['car_id'] == '1') {
         var carOneLastevent = data;
         ///console.log(carOneLastevent);
       }
       else if  (data['car_id'] == '2') {
         var carTwoLastevent = data;
         ///console.log(carTwoLastevent);
       }
       else if  (data['car_id'] == '3') {
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
			//same for Truck 3


			data3 = get(Truck2.info)
			var pos3 = data3['position'];
			var v3 = data3['speed'];

			var safetydistance3 = 8888;

			var sddistance3 = obstaclepos - pos3 - ssdistance3;

			dt3 = sddistance3/v3;

			var targetID3 = 3;

			io.sockets.emit('slow_down', {
				id: targetID3,
				speed: -v3,
				time: dt3

			});
}
