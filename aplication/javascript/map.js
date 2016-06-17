//'use strict';
//
///**
// * Created by mateuszszymula on 15.06.16.
// */
//
//    function initMap () {
//    var locations = [
//        ['Sfinks700', 54.44995979999999, 18.566682899999932, 4],
//        ['Dream Club', 54.4443093, 18.566634399999998, 2],
//        ['3 Siostry', 54.4458772, 18.568411200000014, 3],
//        ['Klub Parlament', 54.3513459, 18.648819499999945, 1],
//        ['Pokład Gdynia', 54.518483, 18.551434900000004, 5]
//    ];
//
//    var map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 11,
//        center: new google.maps.LatLng(54.4444, 18.56444),
//        disableDefaultUI: true,
//        zoomControl: false,
//        scaleControl: true,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//    });
//
//    var infowindow = new google.maps.InfoWindow();
//
//
//
//    var marker, i;
//
//    for (i = 0; i < locations.length; i++) {
//        marker = new google.maps.Marker({
//            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//            map: map
//        });
//
//        google.maps.event.addListener(marker, 'click', (function (marker, i) {
//            return function () {
//                infowindow.setContent(locations[i][0]);
//                infowindow.open(map, marker);
//            }
//        })(marker, i));
//    }
//}
//
////function initialize() {
////    var fenway = {lat: 42.345573, lng: -71.098326};
////    var map = new google.maps.Map(document.getElementById('map'), {
////        center: fenway,
////        zoom: 14
////    });
////    var panorama = new google.maps.StreetViewPanorama(
////        document.getElementById('pano'), {
////            position: fenway,
////            pov: {
////                heading: 34,
////                pitch: 10
////            }
////        });
////    map.setStreetView(panorama);
////}