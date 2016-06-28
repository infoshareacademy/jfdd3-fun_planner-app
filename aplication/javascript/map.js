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
        $('#map').css({"left": "35%", 'display': 'block'});

    });

    $ShowCalendarAgain.on('click', function () {
        $('#map').css({'display': 'none'});
        $('.calendar-position').show();
        $('.pull-right').show();
        $('#button-map').show();
        $('#hide-button-map').hide();
    });







});