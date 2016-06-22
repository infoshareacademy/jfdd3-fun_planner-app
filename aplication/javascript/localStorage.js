function sendToStorage(agendaEvents) {
    var eventsRemember = [],
        table = finalCalendarEventsTable;

    //console.log(agendaEvents);
    agendaEvents.each(function (index) {
        table.filter(findEvent);

    });

    function findEvent(element, index, array) {
        console.log(element);
    }
}
