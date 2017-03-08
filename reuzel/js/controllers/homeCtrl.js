/*jshint esversion: 6 */
(function() {
    'use strict';
    angular.module('starter')
        .controller('homeCtrl', mainController);

    function mainController($scope, $state, $stateParams, $q, $ionicModal, $ionicScrollDelegate, catalogServices) {

        // Variables definition
        $scope.url  = "../../";
        if (ionic.Platform.isAndroid()) {
            $scope.url  = "/android_asset/www/";
        }
        $scope.mainVideo = "videos/pomades.m4v";

        $scope.mainBackground = 'imageHome';

        // Videos
        $scope.playVideo = function() {
            var templateUrl = $scope.url + 'templates/video-popover.html';
            $ionicModal.fromTemplateUrl(templateUrl, {
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

        // If you want to initialize something

        (function() {})();

    }
})();
