app.controller('PanicCtrl', function ($scope, $rootScope, $ionicModal, $ionicPopover, $timeout,  $ionicActionSheet, $ionicLoading) {
    // Form data for the login modal
    $scope.loginData = {};

//    var navIcons = document.getElementsByClassName('ion-navicon');
//    for (var i = 0; i < navIcons.length; i++) {
//        navIcons.addEventListener('click', function () {
//            this.classList.toggle('active');
//        });
//    }

    var fab = document.getElementById('fab');
    

    // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">My Popover Title</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       My Popover Contents' +
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
		
		$scope.time_out = 0;
		
	
		$scope.help_text = "AYUDA";
	
		$scope.start_panic = function(){
			
			
			 $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
					($scope.show_timer)?$scope.show_timer=false:$scope.show_timer=true;
				($scope.show_timer)?$scope.help_text = "CANCELAR":$scope.help_text = "AYUDA";
            $ionicLoading.hide();
        }, 2000);
			
				
			
			
//			var timer = setTimeout(function(){
//				
//				$scope.show_timer = true;
//				
//			}, 3000);
		
		};
	
	
	$scope.onCancelPanic = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [{
                text: '<b>Falsa</b> Alarma'
            }, {
                text: 'Probando servicio'
            }],
            destructiveText: 'Continuar alarma',
            titleText: 'Cancelar alarma',
            cancelText: '¿Desea cancelar la alarma?',
            cancel: function() {
                
            },
            buttonClicked: function(index) {
								hideSheet();
                $scope.start_panic();
            }
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            hideSheet();
        }, 3000);

    };
});