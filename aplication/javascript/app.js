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
            zoom: 11,
            disableDefaultUI: true,
            zoomControl: false,
            scaleControl: true,
            bounds: {}
        };

        var createRandomMarker = function(i, bounds, idKey) {
            var lat_min = bounds.southwest.latitude,
                lat_range = bounds.northeast.latitude - lat_min,
                lng_min = bounds.southwest.longitude,
                lng_range = bounds.northeast.longitude - lng_min;

            if (idKey == null) {
                idKey = "id";
            }

            var latitude = lat_min + (Math.random() * lat_range);
            var longitude = lng_min + (Math.random() * lng_range);
            var ret = {
                latitude: latitude,
                longitude: longitude,
                title: 'm' + i
            };
            ret[idKey] = i;
            return ret;
        };
        $scope.randomMarkers = [];
        // Get the bounds from the map once it's loaded
        $scope.$watch(function() {
            return $scope.map.bounds;
        }, function(nv, ov) {
            // Only need to regenerate once
            if (!ov.southwest && nv.southwest) {
                var markers = [];
                for (var i = 0; i < 50; i++) {
                    markers.push(createRandomMarker(i, $scope.map.bounds))
                }
                $scope.randomMarkers = markers;
            }
        }, true);

        window.updateMarkers = function (markers) {
            $scope.markers = markers;
            $scope.$apply();
        };

        window.map = $scope.map;
    }


    function loadingBarCtrl () {

    }
})();