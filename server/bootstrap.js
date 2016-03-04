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
            name: "Choate Rosemary Hall A",
            school_id: choate_id,
            level: 'varsity'
        }, {
            name: "Choate Rosemary Hall B",
            school_id: choate_id,
            level: 'varsity'
        }, {
            name: "Choate Rosemary Hall C",
            school_id: choate_id,
            level: 'varsity'
        }, {
            name: "Deerfield Academy A",
            school_id: deerfield_id,
            level: 'varsity'
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
            end_date: new Date(),
            name: "Season One"
        });
        var season2_id = Seasons.insert({
            start_date: new Date(),
            end_date: new Date(),
            name: "Season Two"
        })
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
            student_id: student1_id,
            team_id: choate_a_id,
            score: 1
        }, {
            question_id: "2",
            round_id: "1",
            competition_id: competition1_id,
            student_id: student3_id,
            team_id: choate_b_id,
            score: 2
        }, {
            question_id: "3",
            round_id: "1",
            competition_id: competition1_id,
            student_id: student5_id,
            team_id: choate_c_id,
            score: 4
        }, {
            question_id: "3",
            round_id: "1",
            competition_id: competition1_id,
            student_id: student6_id,
            team_id: choate_c_id,
            score: 4
        }, {
            question_id: "1",
            round_id: "2",
            competition_id: competition1_id,
            student_id: student7_id,
            team_id: deerfield_a_id,
            score: 2
        }, {
            question_id: "2",
            round_id: "2",
            competition_id: competition1_id,
            student_id: student7_id,
            team_id: deerfield_a_id,
            score: 2
        }, {
            question_id: "1",
            round_id: "3",
            competition_id: competition1_id,
            student_id: student8_id,
            team_id: deerfield_a_id,
            score: 3
        }, {
            question_id: "1",
            round_id: "4",
            competition_id: competition1_id,
            student_id: student8_id,
            team_id: deerfield_a_id,
            score: 4
        }, {
            question_id: "1",
            round_id: "5",
            competition_id: competition1_id,
            student_id: student7_id,
            team_id: deerfield_a_id,
            score: 5
        }, {
            question_id: "1",
            round_id: "1",
            competition_id: competition2_id,
            student_id: student2_id,
            team_id: choate_a_id,
            score: 2
        }, {
            question_id: "2",
            round_id: "1",
            competition_id: competition2_id,
            student_id: student4_id,
            team_id: choate_b_id,
            score: 4
        }, {
            question_id: "3",
            round_id: "1",
            competition_id: competition2_id,
            student_id: student6_id,
            team_id: choate_c_id,
            score: 5
        }, {
            question_id: "1",
            round_id: "2",
            competition_id: competition2_id,
            student_id: student7_id,
            team_id: deerfield_a_id,
            score: 1
        }, {
            question_id: "2",
            round_id: "2",
            competition_id: competition2_id,
            student_id: student8_id,
            team_id: deerfield_a_id,
            score: 3
        }, {
            question_id: "1",
            round_id: "3",
            competition_id: competition2_id,
            student_id: student8_id,
            team_id: deerfield_a_id,
            score: 2
        }, {
            question_id: "1",
            round_id: "4",
            competition_id: competition2_id,
            student_id: student7_id,
            team_id: deerfield_a_id,
            score: 3
        }, {
            question_id: "1",
            round_id: "5",
            competition_id: competition2_id,
            student_id: student7_id,
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


if (Meteor.isServer) {
    Meteor.startup(function() {
        if (Tweets.find().count() != 0) {
            Tweets.remove({});
        }
        var Twit = Meteor.npmRequire('twit');

        var T = new Twit({
            consumer_key: 'WqvaNS6yZECzeJouQSijVuYn0', // API key
            consumer_secret: 'l2WFE0hBs3UfYCVUkWxUjDvqg5tgFo00jpTDOfFaEyI936O2R0', // API secret
            access_token: '2155608048-X0tgTpTmU88WUOFx7fSQ9RyL7YeWzRTMf4k4p5H',
            access_token_secret: 'RPks6pEBnecnoL5psJvONRrsutyHu73NzA6ubVEoxYhHk'
        });

        T.get('search/tweets', {
            q: 'GNHML since:2011-07-11',
            count: 100
        }, Meteor.bindEnvironment(function(err, data, response) {
            for (var i = 0; i < data.statuses.length; i++) {
                var userName = data.statuses[i].user.name;
                var userScreenName = data.statuses[i].user.screen_name;
                var userTweet = data.statuses[i].text;
                var tweetDate = data.statuses[i].created_at;
                var profileImg = data.statuses[i].user.profile_image_url;
                Tweets.insert({
                    user: userName,
                    userscreen: userScreenName,
                    tweet: userTweet,
                    picture: profileImg,
                    date: tweetDate.substring(0, tweetDate.length - 11)
                }, function(error) {
                    if (error)
                        console.log(error);
                });
            };
            Tweets.find({}, {sort: {date: 1}});
        }))

        var stream = T.stream('statuses/filter', {
            track: 'GNHML'
        })

        stream.on('tweet', Meteor.bindEnvironment(function(tweet) {
            var userName = tweet.user.name;
            var userScreenName = tweet.user.screen_name;
            var userTweet = tweet.text;
            var tweetDate = tweet.created_at;
            var profileImg = tweet.user.profile_image_url;

            console.log(userScreenName + " (" + userName + ")" + " said " + userTweet + " at " + tweetDate);
            console.log("=======================================");
            Tweets.insert({
                user: userName,
                userscreen: userScreenName,
                tweet: userTweet,
                picture: profileImg,
                date: tweetDate.substring(0, tweetDate.length - 11)
            }, function(error) {
                if (error)
                    console.log(error);
            });
            Tweets.find({}, {sort: {date: 1}});
        }))
    });
}
