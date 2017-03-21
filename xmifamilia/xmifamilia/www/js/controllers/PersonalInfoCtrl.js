app.controller('PersonalInfoCtrl', function($scope, $stateParams, $state) {
	
	var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        $state.go('app.panic')
				console.log("mams");
    });
	
	console.log("PersonalInfoCtrl");
    /* ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    */
});