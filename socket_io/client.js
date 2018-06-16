var io = require('socket.io-client');
var socket = io('http://localhost:3000?clientId=car_2');


int id = 2;
double speed = 0;
double position = 0;

socket.on('slow_down', function(data) {
    console.log(data);
});

socket.on('req_info', function(data){
	
	if(data['id'] == this.id){
		io.sockets.emit('send_info', {
			id: this.id,
			speed: this.speed,
			position: this.position
		});
	}
});