app.controller('LegalSupportCtrl', function ($scope, $state) {
	console.log("LegalSupportCtrl");
	$scope.goTo = function(param){
		  $state.go(param);
		console.log(param)
	}
	

});