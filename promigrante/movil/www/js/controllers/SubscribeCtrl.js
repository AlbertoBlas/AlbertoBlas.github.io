app.controller('SubscribeCtrl', function ($scope, $state, $timeout, $ionicPopup, ionicMaterialInk) {
	console.log("SubscribeCtrl");
	$scope.goTo = function (param) {
		$state.go(param);
		console.log(param)
	}
	$scope.showConfirmation = function () {
		var alertPopup = $ionicPopup.confirm({
			okText:"Sí",
			cancelText:"No",
			title: 'Confirme su nombre'
			, template: '<center>Se registrará como:<br> <strong>"Jorge Hernández"</strong><br><br>¿Su nombre corresponde al de su acta de nacimiento?</center>'
		});
		alertPopup.then(function (res) {
			if (res) {
				$scope.goTo('app.personal_info')
			}
			else {
				
			}
		});
		$timeout(function () {
			//ionic.material.ink.displayEffect();
			ionicMaterialInk.displayEffect();
		}, 0);
	};
});