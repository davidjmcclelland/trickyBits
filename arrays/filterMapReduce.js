(function () {
    "use strict";

    var musicians = [
        {
            name: "Esperanza Spalding",
            instruments: ["bass", "voice"],
            since: 2006,
        },
        {
            name: "Jacob Collier",
            instruments: ["bass", "voice", "piano", "drums"],
            since: 2016,
        },
        {
            name: "Theo Katzman",
            instruments: ["guitar", "voice", "drums"],
            since: 2011,
        },
        {
            name: "Annie Clark",
            instruments: ["guitar", "voice"],
            since: 2007,
        },
        {
            name: "H.E.R.",
            instruments: ["guitar", "voice"],
            since: 2017,
        },
        {
            name: "Anderson .Paak",
            instruments: ["drums", "voice"],
            since: 2014,
        },
        {
            name: "Terri Lyne Carrington",
            instruments: ["drums"],
            since: 1984,
        },
    ];

    // filter for just the drummers
    var drummers = [];
    for (var i = 0; i < musicians.length; i++) {
        var person = musicians[i];

        if (person.instruments.indexOf("drums") !== -1) {
            drummers.push(person);
        }
    }

    // do the same thing using using filter, reduce or map
    // first, how do we decide which array method is the right one?
    // if you are trying to select a subset, probably filter
    // the source array (musicians) is left alone and a new array is returned
    drummers = musicians.filter(function(musician){
        // returns value if it evals to true
        return musician.instruments.indexOf('drums') > -1;
    });


    // shout their names with a rebel yell
/*    for (var d = 0; d < drummers.length; d++) {
        var drummerName = drummers[d].name.toUpperCase();
        console.log(drummerName, "plays DRUMS! YEAH!");

        drummers[d].name = drummerName;
    }*/

    // since we are going to apply a change to each member of the array
    // we should choose map in this example
    // also we could chain this map off the filter function above
    drummers.map(function(drummer){
        drummer.name = drummer.name.toUpperCase();
        console.log(drummer.name, "plays DRUMS! YEAH!");
        // some say you must return values in map, this says otherwise :)
        //return drummer;
    });
    console.log('\nDrummers?', JSON.stringify(drummers), '\n');

    // get the total years of experience for the drummers
/*    var currentYear = new Date().getFullYear();
    var totalYears = 0;
    for (var d = 0; d < drummers.length; d++) {
        totalYears += currentYear - drummers[d].since;
    }*/

    // to operate on array members to create an accumulative result use reduce
    let currentYear = new Date().getFullYear();
    let totalYears = drummers.reduce(function(totalYears, drummer){
        return totalYears += currentYear - drummer.since
        }, 0);

    console.log("These drummers have been active for", totalYears, "years.");
})();
