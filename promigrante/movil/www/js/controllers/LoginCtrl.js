app.controller('LoginCtrl', function ($scope, $state, $http, $ionicLoading, $scope, $ionicPopup, $localStorage) {
	
	$scope.goTo = function(param){
		  $state.go(param)
	}
	
	$scope.account = {username:"migrante@promigrante.com", password:"migrante"}
	
	$scope.sendLogin = function(){
		
		$ionicLoading.show({
						template: '<div class="loader"><svg  class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
					});
		
		$http.post('http://promigrante.pickr.mx/users/login', $scope.account)
			.success(function (data, status, headers, config) {
			
				// store username and token in local storage to keep user logged in between page refreshes
        $localStorage.currentUser = data;
			
				// add jwt token to auth header for all requests made by the $http service
				$http.defaults.headers.common.Authorization = 'Bearer ' + data.token;
				
			
				$ionicLoading.hide();
				$scope.goTo('app.panic');
				console.log(data);

			})
			.error(function (data, status, header, config) {
				$ionicLoading.hide();
				console.log(data);

				$ionicPopup.alert({
					title: 'Login',
					template: 'Usuario y/o contraseña incorrectos.'
				});
			});
		
		
		
	};
	

});