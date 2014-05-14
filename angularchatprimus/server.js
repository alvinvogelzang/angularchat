var express = require('express'),
    Primus = require('primus'),
    Emitter = require('primus-emitter'),
    http = require('http'),
    app = express(),
    server = http.createServer(app);

// Primus server
var primus = new Primus(server, { transformer: 'websockets', parser: 'JSON' });

// add emitter to Primus
primus.use('emitter', Emitter);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

primus.on('connection', function (spark) {
	spark.on('send msg', function (data) {
	  primus.send('get msg', data);
	  console.log(data);
	});
});

server.listen(8080);

