app.controller('PanicCtrl', function ($scope, $rootScope, $ionicModal, $ionicPopover, $timeout,  $ionicActionSheet, $ionicLoading, ionicMaterialInk, $state) {
	//Para efectos
	ionicMaterialInk.displayEffect();
	
    // Form data for the login modal
    $scope.loginData = {};

//    var navIcons = document.getElementsByClassName('ion-navicon');
//    for (var i = 0; i < navIcons.length; i++) {
//        navIcons.addEventListener('click', function () {
//            this.classList.toggle('active');
//        });
//    }
		var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        $state.go('app.panic')
    });

    // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">Noticias</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       Migrantes: 7 puntos en su Defensa...' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

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
	
		$scope.show_timer = false;
		$scope.button_pressed = false;
		
		$scope.time_out = 0;
		
	
		$scope.help_text = "AYUDA";
	
	
		$scope.playAudio = function() {
        var audio = new Audio('audio/panic_timer.mp3');
        audio.play();
    };
	
	
		$scope.start_panic = function(){
			if(!$scope.show_timer){
				$scope.playAudio();	
			}
			
			
			$scope.button_pressed = true;
			
			
			 
			 $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg><button class="btn-sm button-sm pm-btn-orange">Cancelar</button></div>'
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
					($scope.show_timer)?$scope.show_timer=false:$scope.show_timer=true;
				($scope.show_timer)?$scope.help_text = "CANCELAR":$scope.help_text = "AYUDA";
            $ionicLoading.hide();
					$scope.button_pressed = false;
        }, 10000);
			
				
			var btnCancelAlarm;
			
			var timer = setInterval(function(){
				btnCancelAlarm = document.getElementById('fab');
				if(!btnCancelAlarm){ return;}else{
					
					btnCancelAlarm = document.getElementById('fab');
				}
				
				if(btnCancelAlarm.className.indexOf("activated")==-1 && $scope.show_timer){
					btnCancelAlarm.className = "button button-assertive button-fab button-fab-bottom-right activated";
				} else {
					btnCancelAlarm.className = "button button-assertive button-fab button-fab-bottom-right";
				}
				
				
			}, 1500);
		
		};
	
	
	$scope.onCancelPanic = function() {

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
            destructiveButtonClicked: function() {
                hideSheet();
            },
            cancel: function() {
                
            },
            buttonClicked: function(index) {
							console.log("destructive");
								hideSheet();
                $scope.start_panic();
            }
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            hideSheet();
        }, 3000);

    };
	
	

			console.log("Panic Ctrl");
});