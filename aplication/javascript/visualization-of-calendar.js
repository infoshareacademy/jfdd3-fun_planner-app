"use strict";

var $buttonLeft = $('#navi-left'),
    $buttonRight = $('#navi-right'),
    $parentDiv = $('#week-columns'),
    first = 0,
    last = 4;

$buttonLeft.click(function () {
    if (first) {
        var $newColumn = $('<div class= "calendar-column">').attr('id', --first),
            $oldColumn = $('.calendar-column').not('.pending').last().addClass('pending');

        last -= 1;
        $parentDiv.prepend($newColumn).css('margin-left', '-17%');
        $parentDiv.animate({'margin-left': '0%'}, 400, 'swing', function () {
            $oldColumn.remove();
        })
    }
});

$buttonRight.click(function () {
    var $newColumn = $('<div class= "calendar-column">').attr('id', ++last),
        $oldColumn = $('.calendar-column').not('.pending').first().addClass('pending');

    first += 1;
    $parentDiv.append($newColumn).css('margin-left', '0%');
    $parentDiv.animate({'margin-left': '-17%'}, 400, 'swing', function () {
        $oldColumn.remove();
        $parentDiv.css('margin-left', '0%');
    })
});