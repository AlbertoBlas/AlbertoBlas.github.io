app.controller('MenuCtrl', function ($scope, $stateParams, ionicMaterialInk, $state, $localStorage,$http) {
	//ionic.material.ink.displayEffect();
	
	console.log("MenuCtrl");
	
	ionicMaterialInk.displayEffect();
	$scope.options = {
		loop: false,
		effect: 'fade',
		speed: 500,
	}


	$scope.logout = function () {
		$state.go("login");
		
		delete $localStorage.currentUser;
		$http.defaults.headers.common.Authorization = '';
	}


});
