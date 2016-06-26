'use strict';

$(document).ready(function () {

    var $ShowMap = $('#button-map');
    var $ShowCalendarAgain = $('#hide-button-map');

    $ShowMap.on('click', function () {
        $('.calendar-position').hide();
        $('.pull-right').css({'visibility': 'hidden'});
        $('#button-map').hide();
        $('#hide-button-map').show();
        $('.hide-button-map').css({"display": "inline"});
        $('.angular-google-map-container').css({"left": "35%", 'display': 'block'});

    });

    $ShowCalendarAgain.on('click', function () {
        $('.angular-google-map-container').css({'display': 'none'});
        $('.pull-right').css({'visibility': 'visible'});
        $('.calendar-position').show();
        $('.pull-right').show();
        $('.pull-right').css({'visibility': 'visible'});
        $('#button-map').show();
        $('#hide-button-map').hide();
    });







});