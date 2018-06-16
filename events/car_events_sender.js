var io = require('socket.io-client');
var socket = io('http://b1e4e00a.ngrok.io');

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