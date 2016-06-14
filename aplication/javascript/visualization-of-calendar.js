"use strict";

var $buttonLeftSingle = $('#navi-left-single'),
    $buttonRightSingle = $('#navi-right-single'),
    $parentDiv = $('#week-columns'),
    $buttonLeftFifth = $('#navi-left-fifth'),
    $buttonRightFifth = $('#navi-right-fifth'),
    first = 0,
    last = 4;

function left(time, multi) {
    for (var i = 0; i < multi; i += 1) {
        if (first ) {
            (function () {
                var $newColumn = $('<div class= "calendar-column">').attr('id', --first);
                     $('.calendar-column').not('.pending').last().addClass('pending');

                last -= 1;
                $parentDiv.prepend($newColumn).css('margin-left', -17 * (i+1) + '%');

            }())

        }
    }

    $parentDiv.animate({'margin-left': '0%'}, time, 'swing', function () {

        $('.pending').remove();
    })
}

function right(time, multi) {
    for (var i = 0; i < multi; i += 1) {
        (function () {
            var $newColumn = $('<div class= "calendar-column">').attr('id', ++last);
                $('.calendar-column').not('.pending').first().addClass('pending');

            first += 1;
            $parentDiv.append($newColumn).css('margin-left', '0%');

        }())
    }

    $parentDiv.animate({'margin-left': -17 * multi + '%'}, time, 'swing', function () {
       $('.pending').remove();
        $parentDiv.css('margin-left', '0%');
    })
}

$buttonLeftSingle.click(function () {
    left(300, 1);
});

$buttonLeftFifth.click(function () {
    left(500, 5);
});

$buttonRightSingle.click(function () {
    right(300, 1);
});

$buttonRightFifth.click(function () {
    right(500, 5);
});