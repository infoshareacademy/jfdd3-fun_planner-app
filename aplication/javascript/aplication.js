'use strict';

var formatter = new Intl.DateTimeFormat('pl', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});

var formatterDay = new Intl.DateTimeFormat('pl', {
    weekday: 'long'
});

var cityEvents = [
    {
        name: 'Dream Club',
        address: 'Sopot, Bohaterów Monte Cassino 53',
        eventName: 'Girls Night Out!',
        info: 'Tego wieczora w klubie rządzą dziewczyny!Na wokalu pojawi się niepowtarzalna i jedyna w swoim rodzaju ' +
        'Maria Czajkovski i sprawi, że nie zejdziecie z parkietu do samego rana!Muzycznie zadbają o Was PROCENT i BROMI, ' +
        'a na wokalu zaśpiewa niepowtarzalna Maria Czajkovski',
        dateVal: {},
        stars: stars(5),
        foto: 'images1',
        coordinates: [54.444312, 18.566630],
        type: 'Imprezy klubowe'
    },
    {
        name: 'TAN',
        address: 'Sopot, Bohaterów Monte Cassino 63/6',
        eventName: 'TANgo!',
        info: 'Klasyk śpiewał, że do tanga trzeba dwojga. W tym wypadku mowa o Was i o nas. Jakże piękny jest to taniec.' +
        'Pełen zmysłowości i klasy. Niech i ten wieczór skojarzy się Wam z pozytywną emocją. Zatańcz z nami jeszcze raz.',
        dateVal: {},
        stars: stars(5),
        foto: 'images2',
        coordinates: [54.445232, 18.567916],
        type: 'Imprezy Klubowe'
    },
    {
        name: '3 Siostry',
        address: 'Sopot, Powstańców Warszawy 6',
        eventName: 'Annie & the circus',
        info: 'Zapraszamy na wystąpienie szalonych jazzowych klaunow z punkowym podbiciem! Będzie mieszanina styli od jazzu, funky, folku aż po punk, piwko i zabawę! ',
        dateVal: {},
        stars: stars(5),
        foto: 'images3',
        coordinates: [54.445872, 18.568486],
        type: 'Imprezy Klubowe'
    },
    {
        name: 'Sfinks700',
        address: 'Sopot, al. Franciszka Mamuszki 1',
        eventName: 'Summer Drum&Bass',
        info: 'Przy współpracy klubu Sfinks700 oraz kolektywów MATIC i Breaky Vibes powstała idea stworzenia bardzo Drum&Bassowego ' +
        'wydarzenia w samym środku wakacji. Klub mieszczący się prawie na plaży, słoneczna pogoda, skoczne dźwięki jungle, jump-up, ' +
        'techstep i neurofunk – jeśli właśnie takiej zabawy szukasz w lato, to dobrze trafiłeś.',
        dateVal: {},
        stars: stars(5),
        foto: 'images4',
        coordinates: [54.448544, 18.567314],
        type: 'Imprezy Klubowe'
    },


    {
        name: 'Miasto Aniołów Club & Restaurant',
        address: 'Gdańsk, Chmielna 26',
        eventName: 'Twisted by Angels',
        info: 'Impreza, gdzie będziemy jak zwykle bawić się w klimacie mashup, funk, rnb, house, deep i latino house oraz oczywiście ' +
        'największych i najbardziej znanych „miastowych” hitów. Muzę miksować dla Was będzie Rezydent Miasta Aniołów Mike G .',
        dateVal: {},
        stars: stars(5),
        foto: 'images5',
        coordinates: [54.347702, 18.656805],
        type: 'Imprezy Klubowe'
    },
    {
        name: 'Klub Muzyczny Parlament',
        address: 'Gdańsk, Świętego Ducha 2',
        eventName: 'cCu2Night',
        info: 'Chcesz przenieść się w czasy prekursorów disco i poczuć się jak John Travolta w "Gorączce sobotniej nocy"?' +
        'A może kręci Cię klubowe granie i całonocna zabawa dokładnie tak jak robią to na słonecznej Ibizie albo hip-hopowe rytmy rodem zza oceanu?' +
        'Jeśli tak to musisz tu być! Bowiem w Parlamencie w sobotnią noc jest to wszystko i o wiele więcej. W sobotnie wieczory w Parlamencie, ' +
        'każdy znajdzie dla siebie coś miłego.',
        dateVal: {},
        stars: stars(5),
        foto: 'images6',
        coordinates: [54.351140, 18.649863],
        type: 'Imprezy Klubowe'
    },
    {
        name: "Jack's Bar & Restaurant Fahrenheit",
        address: 'Gdańsk, Długi Targ 39/40',
        eventName: 'Funky Splendor',
        info: 'HEJ TY! Nie bądź zły tylko wpadaj na FUNKY SPLENDOR !!! Odgonimy pecha gorącym brzmieniem żywych instrumentów !' +
        'Na trzecią już edycję tego wyjątkowego spendu przygotowaliśmy dla was sam ogień!' +
        'Tym razem do naszego funky bandu dołącza kolejny instrument - saksofon! Lecimy z hałasem na całego !!! ',
        dateVal: {},
        stars: stars(5),
        foto: 'images7',
        coordinates: [54.348410, 18.653798],
        type: 'Imprezy Klubowe'
    },
    {
        name: 'Club Echo',
        address: 'Gdańsk, Wały Jagiellońskie 2/4',
        eventName: 'Summer Disco Night',
        info: 'Przenieś się z nami w czasy, w których rządziło prawdziwe disco, wrotki, disco kula. Naszymi gorącymi brzmieniamy nie damy Ci się nudzić, ' +
        'a nóżka będzie tupać sama. Jeśli lubisz prawdziwy klimat imprezy to musisz tu być!',
        dateVal: {},
        stars: stars(5),
        foto: 'images8',
        coordinates: [54.350342, 18.647033],
        type: 'Imprezy Klubowe'
    },


    {
        name: 'Klub Pokład Gdynia',
        address: 'Gdynia, al. Jana Pawła II 11',
        eventName: 'We are Your Friends',
        info: 'Witajcie Pokładowicze !' +
        'Czas na powtórkę z rozrywki i uczynienie "małego" piekiełka. Na naszej imprezie, na wszystkie panie czeka spersonalizowana karta "21" drinków. ' +
        'Mnóstwo atrakcji, dobvra muzyka to Pokład w Gdyni.',
        dateVal: {},
        stars: stars(5),
        foto: 'images9',
        coordinates: [54.518653, 18.548150],
        type: 'Imprezy Klubowe'
    },
    {
        name: 'Blues Club',
        address: 'Gdynia, Portowa 9',
        eventName: 'Jam Session Bluesowe z Water Jug',
        info: 'Zapraszamy was nasi drodzy Bluesowi entuzjaści na Jem Session w wykonaniu Water Jug.' +
        'Prawdziwe brzmienia, klimat to coś czego nie zapomnicie. My będziemy, a Ty?',
        dateVal: {},
        stars: stars(5),
        foto: 'images10',
        coordinates: [54.524461, 18.543094],
        type: 'Koncert'
    },
    {
        name: 'Klub Atlantic Gdynia',
        address: 'Gdynia, 3 Maja 28',
        eventName: 'Exciting Night 14',
        info: 'Czternasty raz mamy zaszczyt zaprosić wszystkich fanów i miłośników twórczości Depeche Mode na wyjątkowe wydarzenie jakim jest EXCITING NIGHT.',
        dateVal: {},
        stars: stars(5),
        foto: 'images11',
        coordinates: [54.519184, 18.535465],
        type: 'Imprezy Klubowe'
    },
    {
        name: 'Klub Desdemona',
        address: 'Gdynia, Antoniego Abrahama 37',
        eventName: 'ODRA, 71TONMAN',
        info: 'Mamy przyjemność zaprosić wszystkich na piękny koncert jednych z bardziej komercyjnych(nie) ' +
        'zespołów polskich! Już niebawem w gdyńskiej Desdemonie wystąpią w ramach wspólnej trasy wystąpią: ODRA, 71TONMAN',
        dateVal: {},
        stars: stars(5),
        foto: 'images12',
        coordinates: [54.518011, 18.540758],
        type: 'Koncert'
    }
];

function randomValue(endOfrange) {

    return (Math.round(Math.random() * (endOfrange - 1)));

}

function createDate() {

    var startDate = new Date().getTime();
    var endDate = new Date(2016, 7, 0).getTime();

    return new Date(startDate + Math.random() * (endDate - startDate));

}

function stars(size) {

    var stars = [];
    var starsNumber = randomValue(size);

    for (var i = 0; i < size; i++) {

        if (i < starsNumber) {
            stars.push('<span class="glyphicon glyphicon-star-empty star-fill"></span>');
        } else {
            stars.push('<span class="glyphicon glyphicon-star-empty"></span>');
        }

    }

    return stars = stars.toString().replace(/,/g, '');

}

function randomCityEvent(tableSize) {

    var randomCityEventTable = [];

    for (var i = 0; i < tableSize; i++) {
        var dateVal = createDate();
        var possibleValues = Math.round(Math.random() * ((cityEvents.length) - 1));

        randomCityEventTable.push({
            name: cityEvents[possibleValues].name,
            address: cityEvents[possibleValues].address,
            info: cityEvents[possibleValues].info,
            dateVal: dateVal,
            datePl: formatter.format(new Date(dateVal)),
            stars: cityEvents[possibleValues].stars,
            foto: cityEvents[possibleValues].foto
        });
    }

    return randomCityEventTable.sort(function (a, b) {

        return Date.parse(a.dateVal) - Date.parse(b.dateVal);

    });

}

function calendarTabs() {
    var tableEvents = randomCityEvent(100);
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

var finalCalendarEventsTable = calendarTabs();

function showRandomCityEvents(element) {

    var table = finalCalendarEventsTable;
    var $divCalendar = $('#' + element);

    $divCalendar.append('<div><h3><strong class="text-uppercase weekday">' +
        table[element].calWeekday + '</strong></h3><h4><small><div class="data" >' +
        table[element].calDate + '</small></h4></div><div id="event' + element + '" class="calendar-event"></div></div>');

    if (table[element].calEvent.length > 0) {

        for (var index in table[element].calEvent) {
            createEventItem(index, table, element);
            addPopover();
        }
        createDraggable();
    }
}

function createEventItem(index, table, element) {

    var sortingData = table[element].calEvent[index].datePl;
    var eventItem = $('<div class="list-element drag" orderId="' + element + index + '" data-toggle="popover" data-placement="bottom" data-trigger="hover manual"><h5>'
        + table[element].calEvent[index].name + '<button onclick="deleteEvent($(this))" type="button" class="btn-trash pull-right" aria-label="Trash"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></h5><div id="tooltiptext" style="display: none" class="panel-body"><div class="media"><div class="media-body"><h3 class="media-heading">'
        + table[element].calEvent[index].name + '</h3><small>'
        + table[element].calEvent[index].address + '</small><div class="star">'
        + table[element].calEvent[index].stars + '</div>'
        + table[element].calEvent[index].info + '</div><div class="media-right">'
        + table[element].calEvent[index].datePl + '<img class="media-object" src="images/'
        + table[element].calEvent[index].foto + '.jpg"></div></div></div></div>'
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

            $('.event-sorting .list-element').sort(function (a, b) {
                return new Date($(a).attr('data-date').split('.').reverse().join('-')) - new Date($(b).attr('data-date').split('.').reverse().join('-'));
            }).filter(function () {

                var item = this;

                if ( $('.event-sorting .list-element[orderid=' + $(item).attr('orderid') + ']').length === 1 ) {

                    return true;
                }
                $(item).remove();
                return false;
            }).appendTo('.event-sorting');


        }
    });

    $('.event-sorting').sortable({
        cancel: '.list-element'
    });

}

function deleteEvent(value) {
    $('.list-element').popover('hide');
    value.parent().parent().remove();
}
