function sendToStorage(agendaEvents) {
    var eventsToRemember = agendaFromStorage,
        table = finalCalendarEventsTable;

    agendaEvents.each(function () {
        var eventId = $(this)[0].attributes[3].nodeValue,
            eventOrderId = $(this)[0].attributes[2].nodeValue;

        table.forEach(function (day) {
            day.calEvent.forEach(function (event) {
                if (event.eventId == eventId) {
                    event.orderId = eventOrderId;
                    eventsToRemember.push(event);
                }
            });
        })
    });
    localStorage.agendaEvents = JSON.stringify(eventsToRemember);
}

function fromStorageToAgenda(table) {
    table.forEach(function (event) {
        var eventId = event.eventId,
            orderId = event.orderId,
            sortingData = event.datePl,
            eventItem = $('<div class="list-element drag" data-date="' + sortingData + '" data-orderId="' + orderId + '" data-eventId="' + eventId + '" ' +
                'data-toggle="popover" data-placement="bottom" data-trigger="hover manual"><h5>'
                + event.name + '<button onclick="deleteEvent($(this))" type="button" ' +
                'class="btn-trash pull-right" aria-label="Trash"><span class="glyphicon glyphicon-trash" ' +
                'aria-hidden="false"></span></button></h5><div id="tooltiptext" style="display: none" ' +
                'class="panel-body"><div class="media"><div class="media-body"><h3 class="media-heading">'
                + event.name + '</h3><small>'
                + event.address + '</small><div class="star">'
                + event.stars + '</div>'
                + event.info + '</div><div class="media-right">'
                + event.datePl + '<img class="media-object" src="images/'
                + event.foto + '.jpg"></div></div></div></div>'
            );
        $('.scrollAgenda').append(eventItem);
    })
}

function removeFromStorage (eventId) {
    console.log(agendaFromStorage);
}