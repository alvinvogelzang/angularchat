var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

server.listen(3000);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

io.sockets.on('connection', function(socket){
	socket.on('send msg', function(data){
		io.sockets.emit('get msg', data);
	})
});
