var chatControllers = angular.module('chatControllers', []);

chatControllers.controller('ChatCtrl', function($scope, primus){
	$scope.msgs = [];
	$scope.sendMsg = function(){
		primus.send('send msg', {
			name: $scope.msg.name + ' zegt:',
			text:  $scope.msg.text,
		});
		$scope.msg.text = "";
	}

});

chatControllers.controller('MsgCtrl', function($scope, primus){
	$scope.msgs = [];
	primus.on('get msg', function (data) {
    	$scope.msgs.push(data);
		$scope.$digest();
		console.log($scope.msgs);
  	});
});