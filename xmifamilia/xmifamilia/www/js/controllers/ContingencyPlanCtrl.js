app.controller('ContingencyPlanCtrl', function ($scope, $stateParams,$state) {
	$scope.goTo = function (param) {
		$state.go(param);
		console.log(param)
	}
});