/**
 * Created by mateuszszymula on 17.06.16.
 */

(function () {
    var app = angular.module('FunPlanner', ['uiGmapgoogle-maps', 'angular-loading-bar']);
    app.controller('uiGmapgoogle-mapsController', mapCtrl);
    app.controller('loadingBar', loadingBarCtrl);
    app.controller('FunPlannerController', function ($scope) {

        $scope.signedIn = false;
        $scope.signOut = signOut;

        function onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            $scope.signedIn = true;
            window.signedIn = true;
            $scope.$apply();
            createDraggable();
            $('.drag').draggable('enable');
        }


        window.onSignIn = onSignIn;
        function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
                $scope.signedIn = false;
                window.signedIn = false;
                $scope.$apply();
                $('.drag').draggable('disable');
            });
        }
        window.signOut = signOut;
  
    });

    function mapCtrl($scope) {
        $scope.map = {center: {
            latitude: 54.432448,
            longitude: 18.594874},
            zoom: 10,
            disableDefaultUI: true,
            zoomControl: false,
            scaleControl: true
        };

        window.map = $scope.map;
    }

    function loadingBarCtrl () {

    }
})();