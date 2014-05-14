var app = angular.module("chatApp", ['chatControllers']);

app.factory('primus', function(){
	var primus = Primus.connect('http://localhost:8080/');
	return primus;
});

