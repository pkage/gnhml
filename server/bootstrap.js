var scores_all_approach = [{
    _id: "1",
    _competition_id: "1",
    _team_id: "roflcoptor",
    scores: [
        [1, 2, 3],
        [1, 2, 3],
        [0, 0, 3]
    ]
}, {
    _id: "2",
    _competition_id: "1",
    _team_id: "roflcoptor",
    scores: [
        [0, 2, 0],
        [1, 0, 3],
        [0, 1, 3]
    ]
}, {
    _id: "3",
    _competition_id: "1",
    _team_id: "lolcoptor",
    scores: [
        [0, 1, 1],
        [1, 1, 2],
        [1, 1, 2]
    ]
}];

var scores_competition_approach = [{
    _competition_id: "1",
    teams: [{
        _team_id: "roflcoptor",
        members: [{
            _id: "1",
            scores: [
                [0, 1, 1],
                [1, 1, 2],
                [1, 1, 2]
            ]
        }, {
            _id: "2",
            scores: [
                [0, 2, 0],
                [1, 0, 3],
                [0, 1, 3]
            ]
        }]
    }, {
        _team_id: "lolcoptor",
        members: [{
            _id: "3",
            scores: [
                [0, 1, 1],
                [1, 1, 2],
                [1, 1, 2]
            ]
        }]
    }]
}, {
    _competition_id: "2",
    teams: [{
        _team_id: "roflcoptor",
        members: [{
            _id: "1",
            scores: [
                [0, 1, 1],
                [1, 1, 2],
                [1, 1, 2]
            ]
        }, {
            _id: "2",
            scores: [
                [0, 2, 0],
                [1, 0, 3],
                [0, 1, 3]
            ]
        }]
    }, {
        _team_id: "lolcoptor",
        members: [{
            _id: "3",
            scores: [
                [0, 1, 1],
                [1, 1, 2],
                [1, 1, 2]
            ]
        }]
    }]
}];

Meteor.startup(function() {
    if (Schools.find().count() == 0) {
        var schools = [{
            name: "Choate Rosemary Hall"
        }, {
            name: "Philips Exeter Academy"
        }];
        var choate_id = Schools.insert(schools[0]);
        var exeter_id = Schools.insert(schools[1]);
    }
    if (Teams.find().count() == 0) {
        var teams = [{
            name: "Rofl Copter",
            school_id: choate_id,
            level: "varsity"
        }, {
            name: "Lol Copter",
            school_id: exeter_id,
            level: "varsity"
        }];

        var exeter_team_id = Teams.insert(teams[0]);
        var choate_team_id = Teams.insert(teams[1]);
    }
    if (Profiles.find().count() == 0) {
        var profiles = [{
            name: "Jessica Shi",
            email: "jshi17@choate.edu",
            class: "2017",
            team_id: choate_team_id,
            school_id: choate_id,
            account_id: null
        },{
            name: "Patrick Kage",
            email: "pkage16@choate.edu",
            class: "2016",
            team_id: choate_team_id,
            school_id: choate_id,
            account_id: null
        },
         {
            name: "Philip Xu",
            email: "jxu16@choate.edu",
            class: "2016",
            team_id: choate_team_id,
            school_id: choate_id,
            account_id: null
        }, {
            name: "Prep Prepington",
            email: "pprepington@exeter.edu",
            class: "2017",
            team_id: exeter_team_id,
            school_id: exeter_id,
            account_id: null
        }];
        for (var i = 0; i < profiles.length; i++) {
            Profiles.insert(profiles[i]);
        }
    }
    if (Seasons.find().count() == 0) {
        var season_id = Seasons.insert({
            start_date: new Date(),
            end_date: new Date()
        });
    }
    if (Competitions.find().count() == 0) {
        var competition_id = Competitions.insert({
            date: new Date(),
            season: season_id,
            teams: [choate_team_id, exeter_team_id]
        })
    }

//     // var competition_dates = [];
//     if (SeasonTable.find().count() == 0) {
//         console.log("1");
//     var competition_dates = [];
//     if (SeasonTable.find().count() === 0) {
//         var teams = Teams.find({}).fetch();
//         var team_names = [];
//         for (var i = 0; i < teams.length; i++) {
//             team_names.push(teams[i].name);
//         }

//         // var competitions = Competitions.find({}).fetch();
//         // for (var i = 0; i < competitions.length; i++) {
//         //     competition_dates.push(competitions[i].date);
//         // }

//         // var scores = Scores.find({}).fetch();
//         // var score_totals = []; // 2d array??
//         // for (var i = 0; i < team_names.length; i++) {
//         //  for (var j = 0; j < competition_dates.length; j++) {
//         //      // query for all scores matching team and date + total
//         //      score_totals[i+j] = i+j; // temporary score
//         //  }
//         // }

//         for (var i = 0; i < team_names.length; i++) {
//             for (var j = 0; j < competition_dates.length; j++) {
//                 console.log("2");
//                 SeasonTable.insert({
//                     team: team_names[i],
//                     // date: competition_dates[j],
//                     // score: score_totals[i+j]
//                 });
//             }
//         }
//     }

//     if (TeamTable.find().count() == 0) {
//         var profiles = Profiles.find({}).fetch();
//         var student_names = [];
//         for (var i = 0; i < profiles.length; i++) {
//             student_names.push(profiles[i].name);
//         }

//         // competitions same as previously, already added

//         // var scores = Scores.find({}).fetch();
//         // var score_totals = []; // 2d array??
//         // for (var i = 0; i < student_names.length; i++) {
//         //  for (var j = 0; j < competition_dates.length; j++) {
//         //      // query for all scores matching student and date + total
//         //      score_totals[i+j] = i+j; // temporary score
//         //  }
//         // }

//         for (var i = 0; i < student_names.length; i++) {
//             for (var j = 0; j < competition_dates.length; j++) {
//                 TeamTable.insert({
//                     student: student_names[i],
//                     date: competition_dates[j],
//                     // score: score_totals[i+j]
//                 });
//             }
//         }
//     }
});

Meteor.startup(function () {
    var competition_dates = [];
    if (Seasons.find().count() === 0) {
        var teams = Teams.find({}).fetch();
        var team_names = [];
        for (var i = 0; i < teams.length; i++) {
            team_names.push(teams[i].name);
        }

        var competitions = Competitions.find({}).fetch();
        for (var i = 0; i < competitions.length; i++) {
            competition_dates.push(competitions[i].date);
        }

        var scores = Scores.find({}).fetch();
        var score_totals = []; // 2d array??
        for (var i = 0; i < team_names.length; i++) {
            for (var j = 0; j < competition_dates.length; j++) {
                // query for all scores matching team and date + total
                score_totals[i+j] = i+j; // temporary score
            }
        }
        

        for (var i = 0; i < team_names.length; i++) {
            for (var j = 0; j < competition_dates.length; j++) {
                Seasons.insert({
                    team: team_names[i],
                    date: competition_dates[j],
                    score: score_totals[i+j]
                });
            }
        }
    }

    if (Teams.find().count() === 0) {
        var profiles = Profiles.find({}).fetch();
        var student_names = [];
        for (var i = 0; i < profiles.length; i++) {
            student_names.push(profiles[i].name);
        }

        // competitions same as previously, already added

        var scores = Scores.find({}).fetch();
        var score_totals = []; // 2d array??
        for (var i = 0; i < student_names.length; i++) {
            for (var j = 0; j < competition_dates.length; j++) {
                // query for all scores matching student and date + total
                score_totals[i+j] = i+j; // temporary score
            }
        }

        for (var i = 0; i < student_names.length; i++) {
            for (var j = 0; j < competition_dates.length; j++) {
                Teams.insert({
                    student: student_names[i],
                    date: competition_dates[j],
                    score: score_totals[i+j]
                });
            }
        }
    }
});
