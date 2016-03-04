Meteor.startup(function() { // setting up team highscore
    if (TeamHighscore.find().count() != 0) {
        TeamHighscore.remove({});
    }
    for (var i = 0; i < Teams.find({}).fetch().length; i++) {
        TeamHighscore.insert({
            _id: Teams.find({}).fetch()[i]._id,
            team_name: Teams.find({}).fetch()[i].name,
            score: 0
        })
    };
    for (var i = 0; i < Competitions.find({}).fetch().length; i++) {
        for (var j = 0; j < Teams.find({}).fetch().length; j++) {
            Scores.find({
                team_id: Teams.find({}).fetch()[j]._id,
                competition_id: Competitions.find({}).fetch()[i]._id
            }).map(function(doc) {
                if (doc.score) {
                    TeamHighscore.update({
                        _id: Teams.find({}).fetch()[j]._id
                    }, {
                        $set: {
                            score: TeamHighscore.find({}).fetch()[j].score + doc.score
                        }
                    }, {
                        upsert: true
                    });
                }
            })
        };
    };

    TeamHighscore_backup = new Mongo.Collection(null);
    TeamHighscore.find({}, {
        sort: {
            score: -1
        },
        limit: 5
    }).forEach(function(doc) {
        TeamHighscore_backup.insert(doc);
    });

    TeamHighscore.remove({})

    TeamHighscore_backup.find().forEach(function(doc) {
        TeamHighscore.insert(doc);
    });
})

Meteor.startup(function() { // setting up individual highscore
    if (IndividualHighscore.find().count() != 0) {
        IndividualHighscore.remove({});
    }
    for (var i = 0; i < Profiles.find({}).fetch().length; i++) {
        IndividualHighscore.insert({
            _id: Profiles.find({}).fetch()[i]._id,
            name: Profiles.find({}).fetch()[i].name,
            score: 0
        })
    };
    for (var i = 0; i < Competitions.find({}).fetch().length; i++) {
        for (var j = 0; j < Profiles.find({}).fetch().length; j++) {
            Scores.find({
                student_id: Profiles.find({}).fetch()[j]._id,
                competition_id: Competitions.find({}).fetch()[i]._id
            }).map(function(doc) {
                if (doc.score) {
                    IndividualHighscore.update({
                        _id: Profiles.find({}).fetch()[j]._id
                    }, {
                        $set: {
                            score: IndividualHighscore.find({}).fetch()[j].score + doc.score
                        }
                    }, {
                        upsert: true
                    });
                }
            })
        };
    };

    IndividualHighscore_backup = new Mongo.Collection(null);
    IndividualHighscore.find({}, {
        sort: {
            score: -1
        },
        limit: 5
    }).forEach(function(doc) {
        IndividualHighscore_backup.insert(doc);
    });

    IndividualHighscore.remove({})

    IndividualHighscore_backup.find().forEach(function(doc) {
        IndividualHighscore.insert(doc);
    });
})

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
            q: 'GNHML OR gnhml since:2016-01-01',
            count: 100
        }, Meteor.bindEnvironment(function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
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
                Tweets.find({}, {
                    sort: {
                        date: 1
                    }
                });
            }
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
            Tweets.find({}, {
                sort: {
                    date: 1
                }
            });
        }))
    });
}
