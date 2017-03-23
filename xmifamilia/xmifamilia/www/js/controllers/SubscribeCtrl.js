app.controller('SubscribeCtrl', function ($scope, $state) {
	console.log("SubscribeCtrl");
	$scope.goTo = function(param){
		  $state.go(param);
		console.log(param)
	}
	

});