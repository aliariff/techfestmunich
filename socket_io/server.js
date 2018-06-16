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

        // receive car event data
        // if there is obstruction, emit to slow_down / full brake
        //  socket.emit('slow_down', {
        //     speed: -10
        // });
		
        console.log(data);
        if (data['status'] == 'obstacle') {
		  
		  //slow down Truck 1
		  
		  double pos1 = data['position'];
		  double v1 = data['speed'];
		  double obstaclepos = data['obstacleposition'];
		
		  double distToObst = obstaclepos - pos1;
			
		  double safetydistance1 = 0; // to obstacle
		  
		  double sddistance1 = distToObst - safetydistance;
		  
		  dt1 = sddistance11/v1;
		  
		  int targetID = 1;
			
          io.sockets.emit('slow_down', {
			 id = targetID, 
             speed: -v1,
			 time: dt1
         });
		 
		 //slow down Truck 2
		 
			data2 = get(Truck2.info)
			double pos2 = data2['position'];
			double v2 = data2['speed'];
			
			double safetydistance2 = ?;
		
			double sddistance2 = obstaclepos - pos2 - ssdistance2;
		 
			dt2 = sddistance2/v2;
			
			int targetID2 = 2;
			
			io.sockets.emit('slow_down', {
				id = targetID2,
				speed: -v2,
				time: dt2
				
			});
		 
		//same for Truck 3 
			
				 
			data3 = get(Truck2.info)
			double pos3 = data3['position'];
			double v3 = data3['speed'];
			
			double safetydistance3 = ?;
		
			double sddistance3 = obstaclepos - pos3 - ssdistance3;
		 
			dt3 = sddistance3/v3;
			
			int targetID3 = 3;
			
			io.sockets.emit('slow_down', {
				id = targetID3,
				speed: -v3,
				time: dt3
				
			});
		 
            io.sockets.emit('slow_down', {
                speed: -10
            });

        }
    });
});