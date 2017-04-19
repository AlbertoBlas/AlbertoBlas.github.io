app.controller('PanicCtrl', function ($scope, $rootScope, $ionicModal, $ionicPopover, $timeout, $ionicActionSheet, $ionicLoading, ionicMaterialInk, $state, $interval) {
	//Para efectos
	ionicMaterialInk.displayEffect();
	// Form data for the login modal
	$scope.loginData = {};

	var fab = document.getElementById('fab');
	fab.addEventListener('click', function () {
		$state.go('app.panic')
	});
	
	
	var template = '<ion-popover-view>' + '   <ion-header-bar>' + '       <h1 class="title">Noticias</h1>' + '   </ion-header-bar>' + '   <ion-content class="padding">' + '       Migrantes: 7 puntos en su Defensa...' + '   </ion-content>' + '</ion-popover-view>';
	
	$scope.popover = $ionicPopover.fromTemplate(template, {
		scope: $scope
	});
	
	$scope.closePopover = function () {
		$scope.popover.hide();
	};
	
	//Cleanup the popover when we're done with it!
	$scope.$on('$destroy', function () {
		$scope.popover.remove();
	});
	
	$rootScope.show_fab = false;
	$rootScope.show_timer = false;
	$rootScope.button_pressed = false;
	$scope.time_out = 0;
	var audio = new Audio('audio/boton3sec.mp3');
	
	$scope.playAudio = function () {
		audio.play();
	};
	
	
//	audio.onended = function () {
//
//		if (!$rootScope.button_pressed) return;
//
//		($rootScope.show_timer) ? $rootScope.show_timer = false: $rootScope.show_timer = true;
//		
//		$ionicLoading.hide();
//	};
	
	
	var didUserHoldForThreeSeconds = 0;

	$scope.start_panic = function () {
		if (!$rootScope.button_pressed) {
			$rootScope.button_pressed = true;
			
		} else {
			$rootScope.button_pressed = false;
		}
	};
	
	$scope.onCancelPanic = function () {
		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			buttons: [{
				text: '<b>Falsa</b> Alarma'
            }, {
				text: 'Estoy fuera de peligro'
            }, {
				text: 'Estoy probando servicio'
            }],
			destructiveText: 'Continuar alarma',
			titleText: 'Cancelar alarma',
			cancelText: '¿Cancelar la alarma?',
			destructiveButtonClicked: function () {
				hideSheet();
			},
			cancel: function () {},
			buttonClicked: function (index) {
				console.log("destructive");
				hideSheet();
				$ionicLoading.show({
					template: '<div class="loader"><svg  class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
				});

				$timeout(function () {
					($rootScope.show_timer) ? $rootScope.show_timer = false: $rootScope.show_timer = true;
					($rootScope.show_timer) ? $scope.help_text = "CANCELAR": $scope.help_text = "AYUDA";
					$ionicLoading.hide();
					$rootScope.button_pressed = true;
				}, 2000);

			}
		});
		// For example's sake, hide the sheet after two seconds
		$timeout(function () {
			hideSheet();
		}, 3000);
	};

	$scope.progress = 0;
	var timeOut = 0;
	
	
	var intervalo;
	$scope.timer_alarm = {};
	$scope.timer_alarm.i = 0;

	$scope.onLongPress = function () {
		console.log("onLongPress");
		
		$scope.timer_alarm.i = 0;
		$scope.show_circle = true;
		$scope.playAudio();
		
		

		intervalo = $interval(function () {
			
			if($scope.timer_alarm.i >= 2){
				
				$interval.cancel(intervalo);
				$scope.start_panic();
				$scope.timer_alarm.i = 0;
				console.log($scope.timer_alarm.i);
				$scope.show_circle = false;
				
				$rootScope.button_pressed = true;
				$rootScope.show_timer = true;
				
				
				console.log("Listo... se ejecuta alama.");
				return;
			}
			
			$scope.timer_alarm.i++;
			console.log($scope.timer_alarm.i);
		}, 1000, 3);
	}
	
	

	$scope.onTouchEnd = function () {
		$interval.cancel(intervalo);
		$scope.timer_alarm.i = 0;
		$scope.show_circle = false;
		
		audio.pause();
		audio.currentTime = 0;
		
		$rootScope.button_pressed = false;
		
		console.log("onTouchEnd");
	}

});
