'use strict';

$(document).ready(function () {

    var $ButtonMap = $('#button-map');

    $ButtonMap.on('click', function () {
        $('.calendar-position').hide();
        $('.pull-right').hide();
        $('#button-map').hide();
        $('#hide-button-map').show();
        $('.hide-button-map').css({"display": "inline"});
        $('.angular-google-map-container').css({"left": "35%"});

    });





});