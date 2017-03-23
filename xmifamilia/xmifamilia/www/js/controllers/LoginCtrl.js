app.controller('LoginCtrl', function ($scope, $state) {
	
	$scope.goTo = function(param){
		  $state.go(param)
	}
	

});