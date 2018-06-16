var io = require('socket.io-client');
var socket = io('http://localhost:3000');

socket.on('slow_down', function(data) {
    console.log(data);
});
