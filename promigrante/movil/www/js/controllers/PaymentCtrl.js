app.controller('PaymentCtrl', function ($scope, $state, $timeout, $ionicPopup, ionicMaterialInk) {

	$scope.purchase_types = [
		{
			text: "3 meses",
			value: "_3months"
		},
		{
			text: "6 meses",
			value: "_6months"
		},
		{
			text: "12 meses",
			value: "_12monts"
		}
  ];
	
	$scope.data = {};
	
	$scope.data.purchase_type =  "_3months";

	$scope.payment_choises = [
		{
			text: "Tarjeta de crédito o débito",
			value: "credit",
			icon: "ion-card"
		},
		{
			text: "Depósito referenciado",
			value: "boucher",
			icon: "ion-cash"
		},
		{
			text: "Pay pal",
			value: "paypal",
			icon: "ion-bag"
		}
  ];
	
	$scope.data.payment_choise = "credit";

	$scope.goTo = function (param) {
		$state.go(param);

	}

	$scope.showConfirmation = function () {
		var alertPopup = $ionicPopup.alert({
			title: 'Pago correcto',
			template: '¡Tu pago se ha registrado correctamente! Ahora te recomendamos realizar tu Plan de contingencia familiar.'
		});


		alertPopup.then(function (res) {
			$scope.goTo('app.contingency_plan');
		});
		$timeout(function () {
			//ionic.material.ink.displayEffect();
			ionicMaterialInk.displayEffect();
		}, 0);
	};


});
