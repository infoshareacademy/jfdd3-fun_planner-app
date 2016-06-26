var eventsToRemember = [];

function sendToStorage(agendaEvent) {
    var eventId = agendaEvent.getAttribute('data-eventId');

    templateFinalCalendarEventsTable.forEach(function (day) {
        day.calEvent.forEach(function (event) {
            if (event.eventId == eventId) eventsToRemember.push(event);
        });
    });
    localStorage.agenda = JSON.stringify(eventsToRemember);
}
