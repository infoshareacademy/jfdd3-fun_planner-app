"use strict";

var $buttonLeft = $('#navi-left');
var $buttonRight = $('#navi-right');

//function updateColumnsID() {
//    var $weekDays = $('.calendar-column');
//    $weekDays.each(function (i, el) {
//        var day = i + 1;
//        $(el).attr('id', 'day' + day);
//    })
//}

function addColumn(side, add, remove) {
    if (side === 'left') {
        $('#week-columns').prepend(add);
    } else {
        $('#week-columns').append(add);
    }
    add.animate({'margin-left': '-20%'});
    remove.animate({'width': '0%'}, 400, 'swing', function () {
        remove.remove();
        updateColumnsID();
    });
}

$buttonLeft.click(function () {
    var $newColumn = $('<div class= "calendar-column">'),
        $oldColumn = $('.calendar-column').not('.pending').last().addClass('pending');

    $('#week-columns').prepend($newColumn).css ('margin-left', '-14.4%');

    $('#week-columns').animate({'margin-left': '0%'},400, 'swing', function(){
        $oldColumn.remove();
    })

});

$buttonRight.click(function () {
    var $newColumn = $('<div class= "calendar-column">'),
        $oldColumn = $('.calendar-column').not('.pending').first().addClass('pending');

    $('#week-columns').append($newColumn).css ('margin-left', '0%');
    $('#week-columns').animate({'margin-left': '-14.4%'},400, 'swing', function(){
        $oldColumn.remove();
        //updateColumnsID();

        $('#week-columns').css ('margin-left', '0%');
    })
});