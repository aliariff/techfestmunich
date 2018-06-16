var io = require('socket.io-client');
var socket = io('http://localhost:3000');

socket.on('slow_down', function(data) {
    console.log(data);
});

socket.emit('car_event', {
    status: 'normal'
});
socket.emit('car_event', {
    status: 'normal'
});
socket.emit('car_event', {
    status: 'normal'
});
socket.emit('car_event', {
    status: 'normal'
});
socket.emit('car_event', {
    status: 'normal'
});
socket.emit('car_event', {
    status: 'normal'
});
socket.emit('car_event', {
    status: 'normal'
});
socket.emit('car_event', {
    status: 'obstacle'
});