'use strict';

$(document).ready(function () {

    var $ShowMap = $('#button-map');
    var $ShowCalendarAgain = $('#hide-button-map');

    $ShowMap.on('click', function () {
        $('.calendar-position').hide();
        //$('.pull-right').hide();
        $('#button-map').hide();
        $('#hide-button-map').show();
        $('.hide-button-map').css({"display": "inline"});
        $('.angular-google-map-container').css({"left": "35%", 'display': 'block'});

    });

    $ShowCalendarAgain.on('click', function () {
        $('.angular-google-map-container').css({'display': 'none'});
        $('.calendar-position').show();
        $('.pull-right').show();
        $('#button-map').show();
        $('#hide-button-map').hide();
    });







});