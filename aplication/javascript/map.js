'use strict';

$(document).ready(function () {

    var $ButtonMap = $('#button-map');

    $ButtonMap.on('click', function () {
        $('.calendar-position').hide();
        $('.pull-right').hide();
        $('.angular-google-map-container').css({"left": "35%"});

    });




});