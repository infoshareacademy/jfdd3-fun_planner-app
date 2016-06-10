'use strict';

$(document).ready(function () {

    var formatter = new Intl.DateTimeFormat('pl', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    var formatterDay = new Intl.DateTimeFormat('pl', {
        weekday: 'long'
    });

    var cityEvents = [
        {name: 'Dream Club', address: 'Sopot, Bohaterów Monte Cassino 53',
            info: 'Suspendisse sed consectetur quam. Duis vel nulla sit amet neque suscipit faucibus. Nullam ut odio tempor, lacinia arcu vitae, efficitur mauris. Vivamus.',
            dateVal: {}, stars: stars(5), foto: 'images1'},
        {name: 'TAN', address: 'Sopot, Bohaterów Monte Cassino 63/6', info: 'Ut ac orci viverra, eleifend odio eu, feugiat quam. Curabitur mattis interdum urna. Ut pulvinar faucibus dictum. Etiam felis nibh, ornare ac.',
            dateVal: {}, stars: stars(5), foto: 'images2'},
        {name: '3 Siostry', address: 'Sopot, Powstańców Warszawy 6', info: 'Suspendisse facilisis lectus tellus, a pulvinar erat iaculis scelerisque. Duis sit amet lacinia ipsum. Nulla vestibulum malesuada arcu ut laoreet. Fusce eget.',
            dateVal: {}, stars: stars(5), foto: 'images3'},
        {name: 'Sfinks700', address: 'Sopot, al. Franciszka Mamuszki 1', info: 'Duis sed ullamcorper ante, a luctus ex. Cras maximus enim vitae massa aliquet ornare sodales sit amet leo. Nullam id sodales sem.',
            dateVal: {}, stars: stars(5), foto: 'images4'},


        {name: 'Miasto Aniołów Club & Restaurant', address: 'Gdańsk, Chmielna 26', info: 'Sed id dui eget libero blandit commodo id et sem. Ut ut ligula ipsum. In hac habitasse platea dictumst. Phasellus ut felis.',
            dateVal: {}, stars: stars(5), foto: 'images5'},
        {name: 'Klub Parlament', address: 'Gdańsk, Świętego Ducha 2', info: 'Duis aliquam arcu quam, molestie varius urna tincidunt a. Phasellus ac mi feugiat, tincidunt leo id, laoreet dolor. Ut a nibh vitae.',
            dateVal: {}, stars: stars(5), foto: 'images6'},
        {name: "Jack's Bar & Restaurant Fahrenheit", address: 'Gdańsk, Długi Targ 39/40', info: 'Vestibulum eget massa dui. Fusce sit amet aliquam mauris, quis tincidunt lacus. Nunc fringilla ultrices lectus ut aliquam. Aliquam id posuere metus.',
            dateVal: {}, stars: stars(5), foto: 'images7'},
        {name: 'Club Echo', address: 'Gdańsk, Wały Jagiellońskie 2/4', info: 'Praesent et tortor vel sem iaculis interdum. Nulla semper dapibus eros et porttitor. Ut condimentum libero id condimentum ultricies. Fusce nibh augue.',
            dateVal: {}, stars: stars(5), foto: 'images8'},


        {name: 'Pokład Gdynia', address: 'Gdynia, al. Jana Pawła II 11', info: 'Fusce lobortis porttitor blandit. Cras diam quam, maximus vel elit eu, auctor euismod dolor. Duis tortor nisl, laoreet non turpis sit amet.',
            dateVal: {}, stars: stars(5), foto: 'images9'},
        {name: 'Blues Club', address: 'Gdynia, Portowa 9', info: 'Curabitur gravida odio lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sollicitudin quis neque eu.',
            dateVal: {}, stars: stars(5), foto: 'images10'},
        {name: 'Klub Atlantic', address: 'Gdynia, 3 Maja 28', info: 'Donec fringilla quis urna at tristique. Maecenas blandit leo libero, ac dictum dui pulvinar in. Sed quis mi non tortor hendrerit efficitur.',
            dateVal: {}, stars: stars(5), foto: 'images11'},
        {name: 'Desdemona', address: 'Gdynia, Antoniego Abrahama 37', info: 'Curabitur laoreet magna ut nisi accumsan, vel fermentum ipsum vulputate. Duis eget orci sem. Pellentesque ullamcorper justo at augue volutpat, eget tempus.',
            dateVal: {}, stars: stars(5), foto: 'images12'}
    ];

    function randomValue (endOfrange) {

        return (Math.round(Math.random() * (endOfrange -1)));

    }

    function createDate () {

        var startDate = new Date().getTime();
        var endDate = new Date(2016,7,0).getTime();

        return new Date(startDate + Math.random() * (endDate - startDate));

    }

    function stars (size) {

        var stars = [];
        var starsNumber = randomValue(size);

        for (var i=0; i < size; i++) {

            if (i < starsNumber ) {
                stars.push('<span class="glyphicon glyphicon-star-empty star-fill"></span>');
            } else {
                stars.push('<span class="glyphicon glyphicon-star-empty"></span>');
            }

        }

        return stars = stars.toString().replace(/,/g,'');

    }

    function randomCityEvent (tableSize) {

        var randomCityEventTable = [];

        for(var i = 0; i < tableSize; i++) {
            var dateVal = createDate();
            var possibleValues = Math.round(Math.random() * ((cityEvents.length) - 1));

            randomCityEventTable.push({
                name: cityEvents[possibleValues].name,
                address: cityEvents[possibleValues].address,
                // info: cityEvents[possibleValues].info,
                dateVal: dateVal,
                datePl: formatter.format(new Date(dateVal)),
                stars: cityEvents[possibleValues].stars,
                foto: cityEvents[possibleValues].foto
            });
        }

        return randomCityEventTable.sort(function(a, b) {

            return Date.parse(a.dateVal) - Date.parse(b.dateVal);

        });

    }

    function calendarTabs () {
        var tableEvents = randomCityEvent(100);
        var tableCalendar = [];
        var nowDay = new Date().getTime();
        var lastDay = Date.parse(tableEvents[tableEvents.length-1].dateVal);
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

    function showRandomCityEvents (element) {

        var table = calendarTabs();
        console.log(table);
        var calEvent = ' ';
        var $ul = '<ul class="media-list">';
        var $divEvent = $('.calendar-event');
        var $divCalendar =  $('.calendar-window');

        $divCalendar.append('<div class="hidden-xs col-sm-12 col-md-2 calendar-column"><h3><strong>' +
            table[element].calWeekday + '</strong></h3><h4>'+
            table[element].calDate +'</h4><div class="calendar-event">'+ calEvent +'</div></div>');

        if (table[element].calEvent.length > 0) {
            calEvent = $('.calendar-event').append($ul);

            for (var index in table[element].calEvent) {
                console.log('yes');

                $('.media-list').last().append('<li class="media list-element"><div class="media-body"><h4 class="media-heading">'
                    + table[element].calEvent[index].name +'<br/><small>'
                    + table[element].calEvent[index].address +'</small></h4>'
                    + table[element].calEvent[index].info +'<div class="star">'
                    + table[element].calEvent[index].stars +'</div></div><div class="media-right"><h4 class="media-heading">'
                    + table[element].calEvent[index].datePl +'</h4><a href="#"><img class="media-object" src="images/'
                    + table[element].calEvent[index].foto +'.jpg" alt=""></a></div></li>'
                );

            }

            //$divCalendar.append('<div class="clear"></div>');
        }

        sortCityEvents();
    }

    function sortCityEvents () {

        $( '.media-list' ).sortable({
            connectWith: '.calendar-column',
            containment: '.row',
            cursor: 'move'

        }).disableSelection();
    }
//function show () {
//    var $divCalendar =  $('.calendar-window');
//    var tablica =
//
//    for (var i = 0; i < tablica.length; i++) {
//        $divCalendar.append(showRandomCityEvents(tablica, i));
//    }
//    $divCalendar.append('<div class="clear"></div>');
//}
//
//    show ();
    showRandomCityEvents(3);
    showRandomCityEvents(4);
    showRandomCityEvents(5);
    showRandomCityEvents(6);
    showRandomCityEvents(7);

});