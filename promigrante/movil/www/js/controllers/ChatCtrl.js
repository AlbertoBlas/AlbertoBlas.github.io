app.controller('ChatCtrl', function ($scope, $state) {
	console.log("vhat");
	$scope.goTo = function(param){
		  $state.go(param);
		console.log(param)
	}
	

});