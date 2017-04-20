app.controller('SubscribeCtrl', function ($scope, $state, $timeout, $ionicPopup, ionicMaterialInk, $http, $ionicLoading) {
	console.log("SubscribeCtrl 2");
	$scope.goTo = function (param) {
		$state.go(param);
		console.log(param)
	}

	$scope.presuscription = {};

	$scope.saveData = function () {
		$http.post('http://promigrante.pickr.mx/user/subscribe', $scope.presuscription)
			.success(function (data, status, headers, config) {
				$ionicLoading.hide();
				$scope.goTo('app.subscription_type');
				console.log(data);

			})
			.error(function (data, status, header, config) {
				$ionicLoading.hide();
				console.log(data);

				$ionicPopup.alert({
					title: 'No se creó cuenta',
					template: data
				});
			});
	}

	$scope.validateCode = function () {
		var alertPopup = $ionicPopup.alert({
			title: 'Código válido',
			template: 'Su código ha sido validado correctamente.'
		});

		alertPopup.then(function (res) {
			$scope.goTo('app.personal_info');
		});
	}

	$scope.showConfirmation = function (form) {

		console.log(form);

		if (form.$valid) {
			var alertPopup = $ionicPopup.confirm({
				okText: "Sí",
				cancelText: "No",
				title: 'Confirme su nombre',
				template: '<center>Se registrará como:<br> <strong>"' + $scope.presuscription.fullname + '"</strong><br><br>¿Su nombre corresponde al de su acta de nacimiento?</center>'
			});

			alertPopup.then(function (res) {
				if (res) {
					$scope.saveData();
					$ionicLoading.show({
						template: '<div class="loader"><svg  class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
					});


				} else {

				}
			});

			$timeout(function () {
				ionicMaterialInk.displayEffect();
			}, 0);
		} else {
			var alertPopupValidate = $ionicPopup.alert({
				title: 'Validación',
				template: 'Todos los campos son obligatorios'
			});

		}

	};
});
