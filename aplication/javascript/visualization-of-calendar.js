"use strict";

var $buttonLeft = $('#navi-left');
var $buttonRight = $('#navi-right');

function updateColumnsID() {
    var $weekDays = $('.calendar-column');
    $weekDays.each(function (i, el) {
        var day = i + 1;
        $(el).attr('id', 'day' + day);
    })
}

function addColumn(side, add, remove) {
    if (side === 'left') {
        $('#week-columns').prepend(add);
    } else {
        $('#week-columns').append(add);
    }
    add.animate({'width': '20%'});
    remove.animate({'width': '0%'}, 400, 'swing', function () {
        remove.remove();
        updateColumnsID();
    });
}

$buttonLeft.click(function () {
    var $newColumn = $('<div class= "calendar-column">').css('width', '0%'),
        $oldColumn = $('#day5');

    addColumn('left', $newColumn, $oldColumn);
});

$buttonRight.click(function () {
    var $newColumn = $('<div class= "calendar-column">'),
        $oldColumn = $('#day1');

    addColumn('right', $newColumn, $oldColumn);
});