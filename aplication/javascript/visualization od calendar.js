"use strict";

var $buttonLeft = $('#navi-left');
var $buttonRight = $('#navi-right');

$buttonLeft.click(function() {
    var $addTopColumn = $('<div class= "calendar-column">');

    $('#week-columns').prepend($addTopColumn);
});

$buttonRight.click(function() {
    var $addTopColumn = $('<div class= "calendar-column">');

    $('#week-columns .navigation.right').before($addTopColumn);
});