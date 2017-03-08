/*jshint esversion: 6 */
(function() {
    'use strict';
    angular.module('starter')
        .controller('catalogCtrl', mainController);

    function mainController($scope, $state, $stateParams, $q, $ionicModal, $ionicScrollDelegate, catalogServices) {

        // Variables definition
        $scope.mainVideo = null;
        $scope.mainBackground = 'imageHome';
        $scope.url  = "../../";
        if (ionic.Platform.isAndroid()) {
            $scope.url  = "/android_asset/www/";
        }

        // Functions

        $scope.setDescription = function(item) {
            $scope.scrollTop();
            $scope.mainBackground = null;
            $scope.mainVideo = null;
            $scope.currentItem = {};
            $scope.currentItem.name = item.name;
            $scope.currentItem.width = item.width;
            $scope.currentItem.image = $scope.url + item.src;
            $scope.currentItem.description = item.description;
        };

        $scope.goTo = function(state) {
            if (!state) return;
            var view = 'app.' + state;
            $state.go(view);
        };

        // Services calls

        var getCategories = function() {
            var defer = $q.defer();
            catalogServices.getCategories(function(err, response) {
                if (err)
                    return console.log("Error to get Categories");
                $scope.images = response;
                defer.resolve(response);
            });
            return defer.promise;
        };

        $scope.getItems = function(type) {
            if (!type) return;
            if (type == $scope.currentCatalog) return;
            $scope.currentCatalog = type;
            $scope.currentItem = null;
            var defer = $q.defer();
            catalogServices.getItems(function(err, response) {
                if (err)
                    return console.log("Error to get item");
                $scope.catalog = response;
                $scope.mainBackground = response.background;
                $scope.mainVideo = response.video;

                defer.resolve(response);
            }, type);
            return defer.promise;
        };

        // Videos
        $scope.playVideo = function() {
            var templateUrl = 'templates/video-popover.html';

            $ionicModal.fromTemplateUrl($scope.url + templateUrl, {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        };

        $scope.closeVideoModal = function() {
            var video = document.getElementById('video');
            video.pause();
            $scope.modal.hide()
                .then(function() {
                    $scope.modal.remove();
                });
        };
        // Videos

        $scope.scrollTop = function() {
            $ionicScrollDelegate.scrollTop();
        };
        // If you want to initialize something

        (function() {
            getCategories();
        })();

    }
})();
