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
        coords: {
            latitude: 54.444312,
            longitude: 18.566630
        },
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
        coords: {
            latitude: 54.445232,
            longitude: 18.567916
        },
        type: 'Imprezy klubowe'
    },
    {
        name: '3 Siostry',
        address: 'Sopot, Powstańców Warszawy 6',
        eventName: 'Annie & the circus',
        info: 'Zapraszamy na wystąpienie szalonych jazzowych klaunow z punkowym podbiciem! Będzie mieszanina styli od jazzu, funky, folku aż po punk, piwko i zabawę! ',
        dateVal: {},
        stars: stars(5),
        foto: 'images3',
        coords: {
            latitude: 54.445872,
            longitude: 18.568486
        },
        type: 'Imprezy klubowe'
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
        coords: {
            latitude: 54.448544,
            longitude: 18.567314
        },
        type: 'Imprezy klubowe'
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
        coords: {
            latitude: 54.347702,
            longitude: 18.656805
        },
        type: 'Imprezy klubowe'
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
        coords: {
            latitude: 54.351140,
            longitude: 18.649863
        },
        type: 'Imprezy klubowe'
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
        coords: {
            latitude: 54.348410,
            longitude: 18.653798
        },
        type: 'Imprezy klubowe'
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
        coords: {
            latitude: 54.350342,
            longitude: 18.647033
        },
        type: 'Imprezy klubowe'
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
        coords: {
            latitude: 54.518653,
            longitude: 18.548150
        },
        type: 'Imprezy klubowe'
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
        coords: {
            latitude: 54.524461,
            longitude: 18.543094
        },
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
        coords: {
            latitude: 54.519184,
            longitude: 18.535465
        },
        type: 'Imprezy klubowe'
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
        coords: {
            latitude: 54.518011,
            longitude: 18.540758
        },
        type: 'Koncert'
    },
    {
        name: 'Scena Letnia w Orłowie',
        address: 'Gdynia, Plaża w Orłowie',
        eventName: 'Piosenka jest dobra na wszystko',
        info: '"Piosenka jest dobra na wszystko" to dla starszych widzów, pamiętających początki Sceny Letniej w ' +
        'Orłowie, koncert bardzo sentymentalny. Dla młodszych będzie to możliwość poznania choćby fragmentów ' +
        'przedstawień Sceny Letniej z ostatnich 19 lat.',
        dateVal: {},
        stars: stars(5),
        foto: 'images13',
        coords: {
            latitude: 54.475543,
            longitude: 18.562205
        },
        type: 'Spektakl'
    },
    {
        name: 'Ergo Arena',
        address: 'Gdańsk, pl. Dwóch Miast 1',
        eventName: 'Lionel Richie',
        info: 'Właściciel jednej z najbardziej charakterystycznych "ciemnych" barw głosów w branży muzycznej, ' +
        'artysta, który sprzedał ponad 100 milionów egzemplarzy płyt na całym świecie - Lionel Richie wystąpi w Polsce!',
        dateVal: {},
        stars: stars(5),
        foto: 'images14',
        coords: {
            latitude: 54.426855,
            longitude: 18.580577
        },
        type: 'Koncert'
    },
    {
        name: 'Teatr Muzyczny',
        address: 'Gdynia, pl. Grunwaldzki 1',
        eventName: 'Ladies Jazz Festival: Rumer',
        info: 'Urodzona w Islamabadzie (Pakistan), obdarzona wspaniałym głosem, talentem i uznaniem na ' +
        'całym świecie zarówno fanów jak prominentnych przedstawicieli międzynarodowego środowiska muzycznego ' +
        'Rumer zaprasza na swój pierwszy w Polsce koncert do Gdyni.',
        dateVal: {},
        stars: stars(5),
        foto: 'images15',
        coords: {
            latitude: 54.516773,
            longitude: 18.545091
        },
        type: 'Koncert'
    },
    {
        name: 'PPNT Gdynia',
        address: 'Gdynia, al. Zwycięstwa 96/98',
        eventName: 'Gdynia Design Days 2016',
        info: 'W lipcu nie można przegapić 9. edycji Gdynia Design Days, największego letniego festiwalu ' +
        'branży projektowej w Polsce.',
        dateVal: {},
        stars: stars(5),
        foto: 'images16',
        coords: {
            latitude: 54.516773,
            longitude: 18.545091
        },
        type: 'Wydarzenie artystyczne'
    },
    {
        name: 'Teatr Wybrzeże',
        address: 'Gdańsk, ul. Św. Ducha 2',
        eventName: 'Maria Stuart',
        info: 'Dwie wielkie królowe - uwięziona Maria Stuart i panująca Elżbieta I. ' +
        'Jeden tron - wspaniały tron Anglii. A także dwie wspaniałe ' +
        'aktorki - Dorota Kolak i Katarzyna Figura.',
        dateVal: {},
        stars: stars(5),
        foto: 'images17',
        coords: {
            latitude: 54.351603,
            longitude: 18.648902
        },
        type: 'Spektakl'
    },
    {
        name: 'Teatr Szekspirowski',
        address: 'Gdańsk, ul. Bolesławskiego 1',
        eventName: 'Wesołe Kumoszki z Windsoru',
        info: 'Rewelacyjna komedia, która podbiła serca publiczności. ' +
        'Spektakl na scenie elżbietańskiej Teatru Szekspirowskiego. ' +
        'Zdrada. Zazdrość. Komedia omyłek.',
        dateVal: {},
        stars: stars(5),
        foto: 'images18',
        coords: {
            latitude: 54.348199,
            longitude: 18.647168
        },
        type: 'Spektakl'
    },
    {
        name: 'Europejskie Centrum Solidarności',
        address: 'Gdańsk, Plac Solidarności 1',
        eventName: 'ALL ABOUT FREEDOM FESTIVAL',
        info: 'Już po raz dziesiąty zapraszamy na interdyscyplinarny ' +
        'festiwal ALL ABOUT FREEDOM FESTIVAL, ' +
        'jedną z najbardziej znanych imprez realizowanych przez ECS.',
        dateVal: {},
        stars: stars(5),
        foto: 'images19',
        coords: {
            latitude: 54.361428,
            longitude: 18.649432
        },
        type: 'Wydarzenie artystyczne'
    },
    {
        name: 'Opera Bałtycka',
        address: 'Gdańsk, ul. Św. Ducha 2',
        eventName: 'Opera Ubu Rex',
        info: 'Jeden z najciekawszych spektakli, jakie powstały w Operze Bałtyckiej. ' +
        'Jeden z najlepszych w dorobku wybitnego twórcy teatru polskiego, ' +
        'jakim jest Janusz Wiśniewski.',
        dateVal: {},
        stars: stars(5),
        foto: 'images20',
        coords: {
            latitude: 54.380989,
            longitude: 18.622520
        },
        type: 'Spektakl'
    },
    {
        name: 'Filharmonia Bałtycka',
        address: 'Gdańsk, ul. Ołowianka 1',
        eventName: 'Koncert symfoniczny',
        info: 'Najlepsi muzycy, wirtuozi, nawspanialsze orkiestry, niezapomniane chwile.',
        dateVal: {},
        stars: stars(5),
        foto: 'images21',
        coords: {
            latitude: 54.352512,
            longitude: 18.659656
        },
        type: 'Koncert'
    },
    {
        name: 'Klub Żak',
        address: 'Gdańsk, ul. Grunwaldzka 195/197',
        eventName: 'Dni Muzyki Nowej',
        info: 'Druga dekada XXI wieku udowadnia, że w muzyce jeszcze ' +
        'nie wszystko zostało powiedziane, a rozwój technologii umożliwiającej ' +
        'eksperymentowanie z syntezą oraz przetwarzaniem sygnałów dźwiękowych ' +
        'prowadzi nie tylko do powstawania Nowej Muzyki, ale również do ' +
        'konstruowania wyjątkowych, często stworzonych w zaledwie jednym egzemplarzu instrumentów.',
        dateVal: {},
        stars: stars(5),
        foto: 'images22',
        coords: {
            latitude: 54.387117,
            longitude: 18.592246
        },
        type: 'Wydarzenie artystyczne'
    },
    {
        name: 'B90',
        address: 'Gdańsk, ul. Doki 1',
        eventName: 'Brujeria. Cieżkie brzmienia',
        info: 'Brujeria (po hiszpańsku "czary") to nazwa kontrowersyjnego zespołu, ' +
        'który 22 czerwca zawładnie gdańskim klubem B90. Będzie to iście czarna ' +
        'magia spod znaku grindcorowego i death metalowego brzmienia. ' +
        'Podczas koncertu grupa zaprezentuje materiał z najnowszego, wydanego po 16 latach przerwy, albumu.',
        dateVal: {},
        stars: stars(5),
        foto: 'images23',
        coords: {
            latitude: 54.364764,
            longitude: 18.648509
        },
        type: 'Koncert'
    },
    {
        name: 'Teatr Miejski im. W. Gombrowicza',
        address: 'Gdynia, ul. Bema 26',
        eventName: 'Dzień Świra',
        info: 'Pierwsza teatralna realizacja scenariusza Marka Koterskiego, ' +
        'według którego autor zrealizował kultowy już dzisiaj film. ' +
        '"Dzień świra". To historia mężczyzny uwikłanego w natręctwa ' +
        'życia codziennego, dla którego każdy kontakt z drugim człowiekiem ' +
        'jest piekłem i ogromnym wyzwaniem jednocześnie. Codziennie rano ' +
        'szuka pomysłu na nadchodzący dzień: higiena, jedzenie, praca, dzieci, ' +
        'jedzenie, drzemka, praca, jedzenie, praca, palenie, proszki, sen... ',
        dateVal: {},
        stars: stars(5),
        foto: 'images24',
        coords: {
            latitude: 54.511031,
            longitude: 18.539289
        },
        type: 'Spektakl'
    },
    {
        name: 'Kotłownia',
        address: 'Gdynia, ul. 3 Maja 27',
        eventName: 'La bomba',
        info: 'Kotłownia to bardzo klimatyczne ' +
        'miejsce zlokalizowane w podziemiach kamienicy w centrum Gdyni. ' +
        'Klub kusi niesamowitą atmosferą i niskimi cenami.',
        dateVal: {},
        stars: stars(5),
        foto: 'images25',
        coords: {
            latitude: 54.519540,
            longitude: 18.535661
        },
        type: 'Imprezy klubowe'
    },
    {
        name: 'Opera Leśna',
        address: 'Sopot, ul. Moniuszki 12',
        eventName: 'Koncert Rodriguez',
        info: 'Rodriguez to legendarny gitarzysta-samouk i wokalista. ' +
        'Swoje pierwsze koncerty zagrał w latach 60. ubiegłego wieku w barach i klubach rodzinnego Detroit. ' +
        'To właśnie w tym mieście Rodriguez zarejestrował dwa studyjne albumy – ' +
        '„Cold Fact" (1969) i „Coming from Reality" (1971). ' +
        'Niestety wydawnictwa przeszły wówczas bez zasłużonego bez echa, ' +
        'a muzyk postanowił skoncentrować się na innych dziedzinach, ' +
        'kończąc filozofię na Wayne State University.',
        dateVal: {},
        stars: stars(5),
        foto: 'images26',
        coords: {
            latitude: 54.444246,
            longitude: 18.544385
        },
        type: 'Koncert'
    },
    {
        name: 'Teatr Leśny',
        address: 'Gdańsk, ul. Jaśkowa Dolina 45',
        eventName: 'Lato ludzi',
        info: 'Projekt Kołakowski czyli cztery trójmiejskie teatry: Teatr Mimo To (Gdańsk), ' +
        'Teatr Biuro Rzeczy Osobistych (Gdynia), TeatRazem (Gdańsk); ' +
        'Teatr Kasablanka (Gdańsk) orupa muzyczna Remont Pomp.',
        dateVal: {},
        stars: stars(5),
        foto: 'images27',
        coords: {
            latitude: 54.372863,
            longitude: 18.595490
        },
        type: 'Wydarzenie artystyczne'
    },
    {
        name: 'Teatr w Oknie',
        address: 'Gdańsk, ul. Długa 50/51',
        eventName: 'MONOTEATR: Być jak Charlie Chaplin',
        info: 'Być jak Charlie Chaplin to brawurowa próba zmierzenia się z legendą. ' +
        'Najsłynniejszy komik kina niemego stał się ikoną popkultury już bardzo dawno temu, ' +
        'jednak do dziś nie wiemy, kim był z pochodzenia i gdzie się urodził ten genialny aktor, scenarzysta i reżyser.',
        dateVal: {},
        stars: stars(5),
        foto: 'images28',
        coords: {
            latitude: 54.349080,
            longitude: 18.652117
        },
        type: 'Spektakl'
    },
    {
        name: 'Centrum Sztuki Współczesnej Łaźnia',
        address: 'Gdańsk, ul. Jaskółcza 1',
        eventName: 'In Out Festival',
        info: 'Festiwal In Out jest cyklicznym projektem Centrum Sztuki Współczesnej Łaźnia ' +
        'organizowany od 2005 roku. W 2015 roku CSW Łaźnia planuje jego jubileuszową 10 ' +
        'już edycję poświęcić tematowi "teatralność". Celem Festiwalu jest przyjrzenie się ' +
        'czym jest teatr i teatralność dla twórców wizualnych, a czym wideo i filmy dla twórców teatralnych.',
        dateVal: {},
        stars: stars(5),
        foto: 'images29',
        coords: {
            latitude: 54.341753,
            longitude: 18.658093
        },
        type: 'Wydarzenie artystyczne'
    },
    {
        name: 'Teatr Miniatura',
        address: 'Gdańsk, al. Grunwaldzka 16',
        eventName: 'Zostań przyjacielem',
        info: 'Muzyczną historię przyjaźni pingwinki, która uciekła z zoo i żółwia ' +
        'porzuconego przez właścicielkę wyreżyserował sam autor Tomasz Man, ' +
        'reżyser teatralny i radiowy, dramatopisarz, wykładowca na Wydziale ' +
        'Lalkarskim we Wrocławiu Państwowej Wyższej Szkoły Teatralnej im. Ludwika Solskiego w Krakowie.',
        dateVal: {},
        stars: stars(5),
        foto: 'images30',
        coords: {
            latitude: 54.375012,
            longitude: 18.618389
        },
        type: 'Spektakl'
    },
    {
        name: 'Akademia Muzyczna',
        address: 'Gdańsk, ul. Ląkowa 1-2',
        eventName: 'Koncert pianistyczny',
        info: 'Dr Bogna Czerwińska-Szymula jest wszechstronnym muzykiem, ' +
        'pedagogiem oraz propagatorem twórczości kompozytorów polskich. ' +
        'W 2003 roku z wyróżnieniem ukończyła Akademię Muzyczną im. ' +
        'Stanisława Moniuszki w Gdańsku w klasie fortepianu prof. Grażyny Fiedoruk-Sienkiewicz, ' +
        'gdzie następnie podjęła działalność artystyczną, pedagogiczną i badawczą. ' +
        'W 2012 roku, na macierzystej uczelni, uzyskała tytuł doktora sztuki w specjalności gry na fortepianie.',
        dateVal: {},
        stars: stars(5),
        foto: 'images31',
        coords: {
            latitude: 54.346177,
            longitude: 18.663851
        },
        type: 'Koncert'
    },
    {
        name: 'Zbrojownia Sztuki',
        address: 'Gdańsk, ul. Kołodziejska 2',
        eventName: 'ASP 2016. Najlepsze dyplomy',
        info: 'Już wkrótce poznamy najciekawsze dyplomy tegorocznych absolwentów polskich szkół artystycznych. ' +
        'Prace prezentowane będą w Zbrojowni Sztuki oraz w Auli Akademii Sztuk Pięknych.',
        dateVal: {},
        stars: stars(5),
        foto: 'images32',
        coords: {
            latitude: 54.350840,
            longitude: 18.649206
        },
        type: 'Wydarzenie artystyczne'
    },
    {
        name: 'Bunkier Club',
        address: 'Gdańsk, ul. Olejarna 3',
        eventName: 'DJ Bobo dla helskich fok',
        info: 'Schron wybudowano prawdopodobnie w 1941r, dla wykwalifikowanych pracowników przemysłu, ' +
        'cywili oraz dla dowództwa sił zbrojnych i ich rodzin. ' +
        'Od zwykłych schronów przeciwlotniczych, ukrytych z reguły pod ziemią, ' +
        'wyróżniało go wyposażenie w agregaty prądotwórcze, wentylację, gabinety medyczne, ' +
        'magazyny uzbrojenia a nawet prysznice oraz prawdziwe toalety. ' +
        'Jak wygląda teraz? Przyjdź i przekonaj się sam!',
        dateVal: {},
        stars: stars(5),
        foto: 'images33',
        coords: {
            latitude: 54.354688,
            longitude: 18.654481
        },
        type: 'Imprezy klubowe'
    },
    {
        name: 'Scena Kameralna',
        address: 'Sopot, ul. Bohaterów Monte Cassino 30',
        eventName: 'Murzyn Warszawski',
        info: 'Pierwsza powojenna inscenizacja popularnej w międzywojniu komedii Antoniego Słonimskiego, ' +
        'jednej z najbarwniejszych postaci polskiego życia artystycznego i intelektualnego. ' +
        'Opowiedziana tu historia rozgrywa się w środowisku inteligencji pochodzenia żydowskiego, ' +
        'w księgarni i mieszkaniu Konrada Hertmana vel Hertmańskiego, który choruje na polskość.',
        dateVal: {},
        stars: stars(5),
        foto: 'images34',
        coords: {
            latitude: 54.443647,
            longitude: 18.565829
        },
        type: 'Spektakl'
    }
];

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
    return stars.toString().replace(/,/g, '');
}

function randomValue(endOfRange) {

    return (Math.round(Math.random() * (endOfRange - 1)));
}