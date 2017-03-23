app.controller('PaymentCtrl', function ($scope, $state, $timeout, $ionicPopup, ionicMaterialInk) {
	

	
	$scope.goTo = function(param){
		  $state.go(param);
	
	}
	
	$scope.showConfirmation = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Pago correcto',
            template: '¡Tu pago se ha registrado correctamente! Ahora te recomendamos realizar tu Plan de contingencia familiar.'
        });

		
			alertPopup.then(function(res) {
			 $scope.goTo('app.contingency_plan');
		 });
        $timeout(function() {
            //ionic.material.ink.displayEffect();
            ionicMaterialInk.displayEffect();
        }, 0);
    };
	

});