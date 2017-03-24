app.controller('ContingencyPlanCtrl', function ($scope, $stateParams,$state) {
	
	$scope.choice = 'A';
	
	
	console.log()
	$scope.goTo = function (param) {
		$state.go(param);
		console.log(param)
	}
});