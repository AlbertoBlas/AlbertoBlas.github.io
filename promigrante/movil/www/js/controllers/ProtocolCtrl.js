app.controller('ProtocolCtrl', function ($scope, $state) {
	console.log("ProtocolCtrl");
	$scope.goTo = function(param){
		  $state.go(param)
	}
	

});