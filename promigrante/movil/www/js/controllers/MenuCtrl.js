app.controller('MenuCtrl', function ($scope, $stateParams, ionicMaterialInk) {
	//ionic.material.ink.displayEffect();
	ionicMaterialInk.displayEffect();
	$scope.options = {
		loop: false
		, effect: 'fade'
		, speed: 500
	, }


});