/**
 * Created by mateuszszymula on 17.06.16.
 */

(function () {
    var app = angular.module('FunPlanner', []);
    app.controller('MapCtrl', function ($scope) {

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(54.432448, 18.594874),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (x) {

            var image = 'images/publicart.png';
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(x.coords.latitude, x.coords.longitude),
                title: x.name,
                address: x.address,
                date: x.datePl,
                stars: x.stars,
                icon: image,
                content: '<div class="infoWindowContent">' +
                '<img style="float: left; margin-right:20px" src="images/' + x.foto + '.jpg">' +
                '<h style="font-weight: bold;float: left">' + x.eventName + '</h>' +
                '<br>' +
                '<h style="font-weight: bold;float: left">' + x.datePl + '</h>' +
                '<br>' +
                '<p style="text-align: justify">' + x.info + '</p>' + '</div>'
            });


            google.maps.event.addListener(marker, 'click', function () {
                $scope.openInfoWindow(null, marker);
                $scope.$digest();
            });
            $scope.markers.push(marker);
        };

        eventsToDisplay = Array.prototype.concat.apply([], templateFinalCalendarEventsTable.map(function (day) {
            return day.calEvent;
        }));

        function createMarkers(events) {
            $scope.markers.forEach(function (marker) {
                marker.setMap(null);
            });
            $scope.markers = [];
            for (var i = 0; i < events.length; i++) {

                createMarker(events[i]);
            }
        }

        window.createMarkers = createMarkers;

        createMarkers(eventsToDisplay);

        $scope.openInfoWindow = function (e, selectedMarker) {
            e && e.preventDefault();

            infoWindow.setContent('<h1>' + selectedMarker.title + '</h1>' + '<p>' + selectedMarker.address + '</p>' + selectedMarker.stars + '</p>' + selectedMarker.content);
            infoWindow.open($scope.map, selectedMarker);
            $scope.markerId = $scope.markers.indexOf(selectedMarker);

        };

        function showRoute() {

            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;

            directionsDisplay.setMap($scope.map);

            calculateAndDisplayRoute(directionsService, directionsDisplay);
        }

        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
            var waypts = [];

            for (var i = 1; i<=eventsToDisplay.length-2;i++) {
                waypts.push({
                    location: {
                        lat: eventsToDisplay[i].coords.latitude,
                        lng: eventsToDisplay[i].coords.longitude
                    },
                    stopover: true
                })
            }
            console.log(waypts);

            directionsService.route({
                origin: {lat: eventsToDisplay[0].coords.latitude, lng: eventsToDisplay[0].coords.longitude},
                destination: {lat: eventsToDisplay[eventsToDisplay.length-1].coords.latitude, lng: eventsToDisplay[eventsToDisplay.length-1].coords.longitude},
                waypoints: waypts,
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING
            }, function (response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    var route = response.routes[0];
                    //console.log(route);
                    directionsDisplay.setDirections(response);

                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            })
        }

        window.showRoute = showRoute;
    });


    app.controller('FunPlannerController', function ($scope) {

        $scope.signedIn = false;
        $scope.signOut = signOut;

        function onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            $scope.signedIn = true;
            window.signedIn = true;
            $scope.$apply();
            createDraggable();
            $('.drag').draggable('enable');
            agendaFromStorage(profile);
        }

        window.onSignIn = onSignIn;
        function signOut() {
            userId = '';

            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                $scope.signedIn = false;
                window.signedIn = false;
                $scope.$apply();
                $('.drag').draggable('disable');
                $('.event-sorting .list-element').remove();
                showEventsOnMap();
            });
        }

        window.signOut = signOut;
    });
})();
