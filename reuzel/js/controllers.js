/*jshint esversion: 6 */
(function() {
    angular.module('starter.controllers', [])
        .controller('AppCtrl', mainController);

    function mainController($scope, $window, $ImageCacheFactory) {
        $scope.mainUrl = "../../";
        if (ionic.Platform.isAndroid()) {
            $scope.mainUrl = "/android_asset/www/";
        }
        // This function calculate the dimesion of the device
        var calculateDimensions = function() {
            $scope.dev_width = $window.innerWidth;
            $scope.dev_height = $window.innerHeight;
        };

        angular.element($window).bind('resize', function() {
            $scope.$apply(function() {
                calculateDimensions();
            });
        });

        $ImageCacheFactory.Cache([
          $scope.mainUrl + "img/directory/main.jpg",
          $scope.mainUrl + "img/events/main.jpg",
          $scope.mainUrl + "img/home/main.jpg",
          $scope.mainUrl + "img/catalog/pomades/pomadesMain.jpg",
          $scope.mainUrl + "img/catalog/shampoo/shampooMain.jpg",
          $scope.mainUrl + "img/catalog/tonics/tonicMain.jpg"
        ]).then(function() {
            console.log("Images done loading!");
        });

        (function() {
            calculateDimensions();
        })();
    }

})();
