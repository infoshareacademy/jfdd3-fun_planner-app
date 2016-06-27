var eventsInStorage = localStorage.agenda ? JSON.parse(localStorage.agenda) : [];

function changeAgendaStorage(agendaEvent, spliceValue) {
    var eventId = Number(agendaEvent.getAttribute('data-eventId')),
        changedIndex = spliceValue ? findEvent(eventId) : 0,
        orderId = agendaEvent.getAttribute('data-orderId');
    
    templateFinalCalendarEventsTable.forEach(function (day) {
        day.calEvent.forEach(function (event) {
            if (event.eventId === eventId)
                if (spliceValue) eventsInStorage.splice(changedIndex, spliceValue);
                else {
                    event.orderId = orderId;
                    eventsInStorage.splice(changedIndex, spliceValue, event)
                }
        });
    });
    eventsInStorage.sort(function (a, b) {
        return a.orderId - b.orderId;
    });
    localStorage.agenda = JSON.stringify(eventsInStorage);
}

function findEvent(id) {
    var index = eventsInStorage.map(function (e) {
        return e.eventId;
    });
    return index.indexOf(id);
}

function agendaFromStorage() {

    eventsInStorage.forEach(function (event) {
        var sortingData = event.datePl,
            eventId = event.eventId,
            orderId = event.orderId;

        var eventItem = $('<div class="list-element" data-orderId="' + orderId + '" data-eventId="' + eventId + '" ' +
            'data-toggle="popover" data-placement="bottom" data-trigger="hover manual" data-date="' + sortingData + '"><h5>'
            + event.name + '<button onclick="deleteEvent($(this))" type="button" ' +
            'class="btn-trash pull-right btn-trash-show" aria-label="Trash"><span class="glyphicon glyphicon-trash" ' +
            'aria-hidden="true"></span></button></h5><div id="tooltiptext" style="display: none" class="panel-body">' +
            '<div class="media"><div class="media-body"><h3 class="media-heading">'
            + event.name + '</h3><small>'
            + event.address + '</small><div class="star">'
            + event.stars + '</div>'
            + event.info + '</div><div class="media-right">'
            + event.datePl + '<img class="media-object" src="images/'
            + event.foto + '.jpg"></div></div></div></div>'
        );
        $('.event-sorting').append(eventItem);
    });
}