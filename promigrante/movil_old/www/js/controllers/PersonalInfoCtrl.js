app.controller('PersonalInfoCtrl', function($scope, $stateParams, $state, $timeout, $ionicPopup, ionicMaterialInk) {
	
	$scope.purchase_types = [
    { text: "3 meses", value: "_3months" },
    { text: "6 meses", value: "_6months" },
    { text: "12 meses", value: "_12monts" }
  ];
	
	
	
	
	$scope.payment_choises = [
    { text: "Tarjeta de crédito o débito", value: "credit", icon:"ion-card" },
    { text: "Depósito referenciado", value: "boucher", icon:"ion-cash" },
    { text: "Pay pal", value: "paypal", icon:"ion-bag" }
  ];
	
	 
  
  $scope.serverSideChange = function(item) {
    console.log("Selected Serverside, text:", item.text, "value:", item.value);
  };
	
	$scope.goTo = function (param) {
		$state.go(param);
		console.log(param)
	}
	
	
	$scope.showConfirmation = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Pago correcto',
            template: '<center>¡Tu pago se ha registrado correctamente! Ahora te recomendamos realizar tu Plan de contingencia familiar.<br><br>Tu número de cliente es: <strong>#96782</strong></center>'
        });

		
			alertPopup.then(function(res) {
			 $scope.goTo('app.contingency_plan');
		 });
        $timeout(function() {
            //ionic.material.ink.displayEffect();
            ionicMaterialInk.displayEffect();
        }, 0);
    };
	
	var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        $state.go('app.panic');
    });
	
	console.log("PersonalInfoCtrl");
	console.log($scope.choice_a);
    /* ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    */
	
	
	$scope.data = {};
	$scope.data.bgColors = [];
	$scope.data.currentPage = 0;
	for (var i = 0; i < 10; i++) {
		$scope.data.bgColors.push("bgColor_" + i);
	}
	var setupSlider = function () {
		//some options to pass to our slider
		$scope.data.sliderOptions = {
			initialSlide: 0
			, direction: 'horizontal', //or vertical
			speed: 300 //0.3s transition
		};
		//create delegate reference to link with slider
		$scope.data.sliderDelegate = null;
		//watch our sliderDelegate reference, and use it when it becomes available
		$scope.$watch('data.sliderDelegate', function (newVal, oldVal) {
			if (newVal != null) {
				$scope.data.sliderDelegate.on('slideChangeEnd', function () {
					$scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
					//use $scope.$apply() to refresh any content external to the slider
					$scope.$apply();
				});
			}
		});
	};
	setupSlider();
	
	
//	 $scope.data = {
//    payment_choise: 'credit'
//  };
	$scope.data = {
    purchase_type: '_3months'
  };
});