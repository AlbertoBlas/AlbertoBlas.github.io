app.controller('SubscribeTypeCtrl', function ($scope, $state, $timeout, $ionicPopup, ionicMaterialInk, $http, $ionicLoading) {

	console.log("SubscribeTypeCtrl");

	$scope.goTo = function (param) {
		$state.go(param);
		console.log(param)
	};

	$scope.showPaymentModal = function () {
		
		
	};
	
	$scope.validateCode = function (codeForm) {
		
		if (codeForm.$valid) {

			var alertPopup = $ionicPopup.alert({
				title: 'Código válido',
				template: 'Su código ha sido validado correctamente.'
			});

			alertPopup.then(function (res) {
				$scope.goTo('app.personal_info');
			});

		} else {
			
			$ionicPopup.alert({
				title: 'Ingrese código',
				template: 'Ingrese código proporcionado por Call center.'
			});
		}
	};
	


});
