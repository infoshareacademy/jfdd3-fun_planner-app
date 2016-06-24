'use strict';

$(document).ready(function () {

    var $ButtonMap = $('#button-map');

    $ButtonMap.on('click', function () {
        //$('.angular-google-map-container').css({left: 0});
        $('.angular-google-map-container').css({"left": "0", "margin-left": "50%"});
        //$('.angular-google-map-container').show();
        //google.maps.event.trigger(window.map, resize);
    });




});