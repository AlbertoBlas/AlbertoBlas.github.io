app.controller('LawyersNetworkCtrl', function ($scope, $state) {
	console.log("LawyersNetworkCtrl");
	$scope.goTo = function(param){
		  $state.go(param)
	}
	

});