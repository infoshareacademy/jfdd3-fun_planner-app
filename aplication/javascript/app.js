/**
 * Created by mateuszszymula on 17.06.16.
 */

(function () {
    var app = angular.module('FunPlanner', ['angular-loading-bar']);
    app.controller('loadingBar', loadingBarCtrl);
    app.controller('MapCtrl', function ($scope) {

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(54.432448, 18.594874),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (x){

            var image = 'images/publicart.png';
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(x.latitude, x.longitude),
                title: x.name,
                icon: image
            });
            marker.content = '<div class="infoWindowContent">' + '<h>x.eventName</h>' + '<p>x.info</p>' + '</div>';


            google.maps.event.addListener(marker, 'click', function(){
                $scope.openInfoWindow(null, marker);
                $scope.$digest();
            });

            $scope.markers.push(marker);

        }

        for (i = 0; i < cityEvents.length; i++){
            createMarker(cityEvents[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
            e && e.preventDefault();

            infoWindow.setContent('<h2>' + selectedMarker.title + '</h2>' + selectedMarker.content);
            infoWindow.open($scope.map, selectedMarker);
            $scope.markerId = $scope.markers.indexOf(selectedMarker);

        }
    });

    app.controller('FunPlannerController', function ($scope) {

        $scope.signedIn = false;
        $scope.signOut = signOut;

        function onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            // console.log('ID: ' + profile.getId());
            // console.log('Name: ' + profile.getName());
            // console.log('Image URL: ' + profile.getImageUrl());
            // console.log('Email: ' + profile.getEmail());
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
                // console.log('User signed out.');
                $scope.signedIn = false;
                window.signedIn = false;
                $scope.$apply();
                $('.drag').draggable('disable');
            });
        }
        window.signOut = signOut;

    });



    function loadingBarCtrl () {

    }
})();


