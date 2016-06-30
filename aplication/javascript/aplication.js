'use strict';
var eventsToDisplay;

var formatter = new Intl.DateTimeFormat('pl', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});

var formatterDay = new Intl.DateTimeFormat('pl', {
    weekday: 'long'
});

var formatterTime = new Intl.DateTimeFormat('pl', {
    hour: '2-digit',
    minute: '2-digit'
});



function createDate() {

    var startDate = new Date().getTime();
    var endDate = new Date(2016, 8, 0).getTime();

    return new Date(startDate + Math.random() * (endDate - startDate));
}


function randomCityEvent(tableSize) {

    var randomCityEventTable = [],
        eventId = 1;

    for (var i = 0; i < tableSize; i++) {
        var dateVal = createDate();
        var possibleValues = Math.round(Math.random() * ((cityEvents.length) - 1));

        randomCityEventTable.push({
            name: cityEvents[possibleValues].name,
            address: cityEvents[possibleValues].address,
            eventName: cityEvents[possibleValues].eventName,
            info: cityEvents[possibleValues].info,
            dateVal: dateVal,
            datePl: formatter.format(new Date(dateVal)),
            stars: cityEvents[possibleValues].stars,
            foto: cityEvents[possibleValues].foto,
            type: cityEvents[possibleValues].type,
            coords: cityEvents[possibleValues].coords,
            time: formatterTime.format(new Date(dateVal)),
            eventId: eventId++
        });
    }
    return randomCityEventTable.sort(function (a, b) {
        return Date.parse(a.dateVal) - Date.parse(b.dateVal);
    });
}

function calendarTabs() {
    var tableEvents = randomCityEvent(200);
    var tableCalendar = [];
    var nowDay = new Date().getTime();
    var lastDay = Date.parse(tableEvents[tableEvents.length - 1].dateVal);
    var dDay = Math.round((lastDay - nowDay) / (1000 * 60 * 60 * 24));

    function addDate(days) {
        return formatter.format(new Date().setDate(new Date().getDate() + days));
    }

    function addDays(days) {
        return formatterDay.format(new Date().setDate(new Date().getDay() + days - 2));
    }

    for (var i = 0; i < dDay; i++) {
        var tmpDate = addDate(i);
        tableCalendar.push({
            calWeekday: addDays(i),
            calDate: tmpDate,
            calEvent: tableEvents.filter(function (event) {
                return tmpDate === event.datePl;
            })
        });
    }
    return tableCalendar;
}

//var templateFinalCalendarEventsTable = localStorage.calendar ? JSON.parse(localStorage.calendar) : calendarTabs();
var templateFinalCalendarEventsTable = calendarTabs();
var finalCalendarEventsTable = templateFinalCalendarEventsTable;

$('#sandbox-container .input-daterange').datepicker({
    format: "dd.mm.yyyy",
    clearBtn: true,
    language: "pl",
    multidateSeparator: ".",
    autoclose: true,
    todayHighlight: true
});

$('form').change(function () {
    var filterCheckboxValue = [];
    var dateFrom = new Date($('#dateFrom').val().split('.').reverse().join('-'));
    var dateTo = new Date($('#dateTo').val().split('.').reverse().join('-'));



    function removeCheckboxValue (value) {
        var pos = filterCheckboxValue.indexOf(value);
        filterCheckboxValue.splice(pos, 0);
    }

    $('#clubParty').is(':checked') ? filterCheckboxValue.push('Imprezy klubowe') : removeCheckboxValue('Imprezy klubowe');
    $('#concert').is(':checked') ? filterCheckboxValue.push('Koncert') : removeCheckboxValue('Koncert');
    $('#artisticEvent').is(':checked') ? filterCheckboxValue.push('Wydarzenie artystyczne') : removeCheckboxValue('Wydarzenie artystyczne');
    $('#spectacle').is(':checked') ? filterCheckboxValue.push('Spektakl') : removeCheckboxValue('Spektakl');

    $parentDiv.empty();

    finalCalendarEventsTable = templateFinalCalendarEventsTable
        .filter(function (itemCalendar) {
            var testDate = new Date((itemCalendar.calDate).split('.').reverse().join('-'));
            if ($('#dateFrom').val() === "" || $('#dateTo').val() === "") {
                return true;
            }

            return dateFrom <= testDate && testDate <= dateTo;


        })

        .map(function (itemCalendar) {
        return {
           calWeekday: itemCalendar.calWeekday,
           calDate: itemCalendar.calDate,
           calEvent: itemCalendar.calEvent.filter(function (itemEvent) {

               if (filterCheckboxValue.length === 0) {
                   return true;
               }
               return filterCheckboxValue.includes(itemEvent.type);
           })
        };
    });

    first = 0;
    last = 4;
    start();
});

function showRandomCityEvents(element) {

    var table = finalCalendarEventsTable;
    var $divCalendar = $('#' + element);

    if (table[element] !== undefined) {

        $divCalendar.append('<div><h3><strong class="text-uppercase weekday">' +
            table[element].calWeekday + '</strong></h3><h4><small><div class="data" >' +
            table[element].calDate + '</small></h4></div><div id="event' + element + '" class="calendar-event"></div></div>');

        if (table[element].calEvent.length > 0) {
            for (var index in table[element].calEvent) {
                createEventItem(index, table, element);
                addPopover();
            }
            signedNo();
            signedYes();
        }
    } else return false;
}
function signedYes() {
    if (window.signedIn == true) {
        createDraggable();
    }
}

function signedNo() {
    if (window.signedIn == false) {
        $('.drag', {draggable: 'disable'});
    }
}

function createEventItem(index, table, element) {

    var sortingData = table[element].calEvent[index].datePl,
        eventId = table[element].calEvent[index].eventId;

    var eventItem = $('<div class="list-element drag" data-orderId="' + element + index + '" data-eventId="'
        + eventId + '" data-toggle="popover" data-placement="bottom" title="' + table[element].calEvent[index].type + '" data-trigger="hover manual"><h5>'
        + table[element].calEvent[index].name + '<button onclick="deleteEvent($(this))" type="button" class="btn-trash pull-right" '
        + 'aria-label="Trash"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></h5><div id="tooltiptext" '
        + 'style="display: none" class="panel-body"><div class="media"><h3>'
        + table[element].calEvent[index].name + '</h3><div class="media-body"><h3 class="media-heading"><small>'
        + table[element].calEvent[index].datePl + '</small><br/><span class="label label-primary">'
        + table[element].calEvent[index].time + '</span></h3><h4><small>'
        + table[element].calEvent[index].address + '</small></h4><div class="star">'
        + table[element].calEvent[index].stars + '</div></div><div class="media-right"><img class="media-object" src="images/'
        + table[element].calEvent[index].foto + '.jpg"></div><div class="media-info">'
        + table[element].calEvent[index].info + '</div></div></div></div>'
    );

    eventItem.attr('data-date', sortingData);
    $('#event' + element).append(eventItem);
}

function addPopover() {

    $('[data-toggle="popover"]').popover({
        container: 'body',
        html: true,
        content: function () {
            return $('#tooltiptext', this).html();
        }
    });
}

function createDraggable() {

    $('.drag').draggable({

        helper: 'clone',
        appendTo: '.event-sorting',
        connectToSortable: '.event-sorting',
        zIndex: 20,
        stop: function (event) {

            $('.event-sorting div').css({
                width: '100%',
                height: '9%'
            }).removeClass('drag');
            $('.event-sorting button').addClass('btn-trash-show');

            $($('.event-sorting .list-element').get().reverse()).filter(function () {


                var item = this;


                if ($('.event-sorting .list-element[data-orderid=' + $(item).attr('data-orderid') + ']').length === 1) {
                    return true;
                }
                $(item).remove();
                return false;


            }).sort(function (a, b) {
                return $(a)[0].attributes[1].value - $(b)[0].attributes[1].value;
            }).appendTo('.event-sorting');



        }
    });

    $('.event-sorting').sortable({
        cancel: '.list-element',
        receive: function (event, ui) {
            if (($('.event-sorting .list-element[data-orderid=' + ui.item[0].attributes[1].value + ']').length) === 1) {
                changeAgendaStorage(ui.item[0], 0);
            }
        }
    });
}

function deleteEvent(value) {
    var element = value.parent().parent();
    $('.list-element').popover('hide');
    changeAgendaStorage(element[0], 1);
    element.remove();
}

setTimeout(function () {
    $('.abcRioButtonLightBlue').css('background-color', '#8cc63f').css('color', 'white').css('width', '100px').css('border-radius', '4px')
}, 500);
