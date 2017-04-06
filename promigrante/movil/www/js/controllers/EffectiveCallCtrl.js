app.controller('EffectiveCallCtrl', function ($scope, $state) {
	console.log("EffectiveCallCtrl");
	$scope.goTo = function(param){
		  $state.go(param);
		console.log(param)
	}
	

});