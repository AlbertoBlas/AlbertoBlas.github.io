app.controller('PersonalInfoCtrl', function($scope, $stateParams, $state) {
	$scope.goTo = function (param) {
		$state.go(param);
		console.log(param)
	}
	var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        $state.go('app.panic');
    });
	
	console.log("PersonalInfoCtrl");
    /* ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    */
});