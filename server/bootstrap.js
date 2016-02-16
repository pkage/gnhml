Meteor.startup(function() {
    if (Schools.find().count() == 0) { //may be removed
        var schools = [{
            name: "Choate Rosemary Hall"
        }, {
            name: "Philips Exeter Academy"
        }, {
            name: "Deerfield Academy"
        }];
        var choate_id = Schools.insert(schools[0]);
        var exeter_id = Schools.insert(schools[1]);
        var deerfield_id = Schools.insert(schools[2]);
    }

    if (Teams.find().count() == 0) {
        var teams = [{
            name: "Choate Rosemary Hall A"
        }, {
            name: "Choate Rosemary Hall B"
        }, {
            name: "Choate Rosemary Hall C"
        }, {
            name: "Deerfield Academy A"
        }];
        var choate_a_id = Teams.insert(teams[0]);
        var choate_b_id = Teams.insert(teams[1]);
        var choate_c_id = Teams.insert(teams[2]);
        var deerfield_a_id = Teams.insert(teams[3]);
    }
    if (Profiles.find().count() == 0) {
        var profiles = [{
            name: "Jessica Shi", //CHOATE A TEAM
            email: "jshi17@choate.edu",
            class: "2017",
            school_id: choate_id,
            team_id: choate_a_id,
            account_id: null
        }, {
            name: "Patrick Kage", //CHOATE A TEAM
            email: "pkage16@choate.edu",
            class: "2016",
            school_id: choate_id,
            team_id: choate_a_id,
            account_id: null
        }, {
            name: "Philip Xu", //CHOATE B TEAM
            email: "jxu16@choate.edu",
            class: "2016",
            school_id: choate_id,
            team_id: choate_b_id,
            account_id: null
        }, {
            name: "Matt Bardoe", //CHOATE B TEAM
            email: "mb@choate.edu",
            class: "2016",
            school_id: choate_id,
            team_id: choate_b_id,
            account_id: null
        }, {
            name: "Elena Turner", //CHOATE C TEAM
            email: "et@choate.edu",
            class: "2016",
            school_id: choate_id,
            team_id: choate_c_id,
            account_id: null
        }, {
            name: "Jeff Niu", //CHOATE C TEAM
            email: "jn@choate.edu",
            class: "2016",
            school_id: choate_id,
            team_id: choate_c_id,
            account_id: null
        }, {
            name: "Stalin Yourheart", //DEERFIELD A TEAM
            email: "sy@deerfield.edu",
            class: "2016",
            school_id: deerfield_id,
            team_id: deerfield_a_id,
            account_id: null
        }, {
            name: "Abradolf Linkler", //DEERFIELD A TEAM
            email: "as@deerfield.edu",
            class: "2016",
            school_id: deerfield_id,
            team_id: deerfield_a_id,
            account_id: null
        }];
        var student1_id = Profiles.insert(profiles[0]);
        var student2_id = Profiles.insert(profiles[1]);
        var student3_id = Profiles.insert(profiles[2]);
        var student4_id = Profiles.insert(profiles[3]);
        var student5_id = Profiles.insert(profiles[4]);
        var student6_id = Profiles.insert(profiles[5]);
        var student7_id = Profiles.insert(profiles[6]);
        var student8_id = Profiles.insert(profiles[7]);
    }
    if (Seasons.find().count() == 0) {
        var season_id = Seasons.insert({
            start_date: new Date(),
            end_date: new Date()
        });
    }
    if (Competitions.find().count() == 0) {
        var competitions = [{
            date: new Date("9-18-2015"),
            season: season_id,
            teams: [choate_a_id, choate_b_id, choate_c_id, deerfield_a_id]
        }, {
            date: new Date("12-19-2015"),
            season: season_id,
            teams: [choate_a_id, choate_b_id, choate_c_id, deerfield_a_id]
        }]
        var competition1_id = Competitions.insert(competitions[0]);
        var competition2_id = Competitions.insert(competitions[1]);
    }
    if (Scores.find({}).count() == 0) {
        var scores = [{
            question_id: "1",
            round_id: "1",
            competition_id: competition1_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: choate_a_id,
            score: 1
        }, {
            question_id: "2",
            round_id: "1",
            competition_id: competition1_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: choate_b_id,
            score: 2
        }, {
            question_id: "3",
            round_id: "1",
            competition_id: competition1_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: choate_c_id,
            score: 4
        }, {
            question_id: "1",
            round_id: "2",
            competition_id: competition1_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: deerfield_a_id,
            score: 2
        }, {
            question_id: "2",
            round_id: "2",
            competition_id: competition1_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: deerfield_a_id,
            score: 2
        }, {
            question_id: "1",
            round_id: "3",
            competition_id: competition1_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: deerfield_a_id,
            score: 3
        }, {
            question_id: "1",
            round_id: "4",
            competition_id: competition1_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: deerfield_a_id,
            score: 4
        }, {
            question_id: "1",
            round_id: "5",
            competition_id: competition1_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: deerfield_a_id,
            score: 5
        }, {
            question_id: "1",
            round_id: "1",
            competition_id: competition2_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: choate_a_id,
            score: 2
        }, {
            question_id: "2",
            round_id: "1",
            competition_id: competition2_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: choate_b_id,
            score: 4
        }, {
            question_id: "3",
            round_id: "1",
            competition_id: competition2_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: choate_c_id,
            score: 5
        }, {
            question_id: "1",
            round_id: "2",
            competition_id: competition2_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: deerfield_a_id,
            score: 1
        }, {
            question_id: "2",
            round_id: "2",
            competition_id: competition2_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: deerfield_a_id,
            score: 3
        }, {
            question_id: "1",
            round_id: "3",
            competition_id: competition2_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: deerfield_a_id,
            score: 2
        }, {
            question_id: "1",
            round_id: "4",
            competition_id: competition2_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: deerfield_a_id,
            score: 3
        }, {
            question_id: "1",
            round_id: "5",
            competition_id: competition2_id,
            student_id: "3BWRKDRAx9J3todoG",
            team_id: deerfield_a_id,
            score: 5
        }];

        for (var i = 0; i < scores.length; i++) {
            Scores.insert(scores[i]);
        }
    }
});

Meteor.startup(function() {
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
                score_totals[i + j] = i + j; // temporary score
            }
        }


        for (var i = 0; i < team_names.length; i++) {
            for (var j = 0; j < competition_dates.length; j++) {
                Seasons.insert({
                    team: team_names[i],
                    date: competition_dates[j],
                    score: score_totals[i + j]
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
                score_totals[i + j] = i + j; // temporary score
            }
        }

        for (var i = 0; i < student_names.length; i++) {
            for (var j = 0; j < competition_dates.length; j++) {
                Teams.insert({
                    student: student_names[i],
                    date: competition_dates[j],
                    score: score_totals[i + j]
                });
            }
        }
    }
});
