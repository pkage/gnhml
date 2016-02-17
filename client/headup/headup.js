var headupArray = {
    date: new Date(), //temp, in the future using new data format for competition date
    season: 'season_id', //temp
    teams: [{
        team_name: 'Choate',
        scores: [{
            round: "1",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "2",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "3",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "4",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "5",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "6",
            score: Math.floor(Math.random() * 10)
        }]
    }, {
        team_name: 'Exeter',
        scores: [{
            round: "1",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "2",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "3",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "4",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "5",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "6",
            score: Math.floor(Math.random() * 10)
        }]
    }, {
        team_name: 'Rosemary',
        scores: [{
            round: "1",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "2",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "3",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "4",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "5",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "6",
            score: Math.floor(Math.random() * 10)
        }]
    }, {
        team_name: 'Andover',
        scores: [{
            round: "1",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "2",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "3",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "4",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "5",
            score: Math.floor(Math.random() * 10)
        }, {
            round: "6",
            score: Math.floor(Math.random() * 10)
        }]
    }]
}

Template.headup.helpers({
    'headup_context': function() {
        return {
            db: Teams,
            selector: {},
            tracking: [{
                field: 'name',
                title: 'Teams',
                func: function(value, ctx) {
                    teamsInComp = Competitions.find({
                        _id: "iBrN6ErLcJxNcrWvJ" // replace with current comp _id
                    }).fetch()[0].teams;
                    for (var i = 0; i < teamsInComp.length; i++) {
                        if (ctx._id === teamsInComp[i]) {
                            return ctx.name;
                        };
                    };
                }
            }, {
                field: '',
                title: 'Round 1 Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: "iBrN6ErLcJxNcrWvJ", // replace with current comp _id
                        team_id: ctx._id,
                        round_id: "1"
                    }).fetch();
                    console.log(scores)
                    score = 0;
                    for (var i = 0; i < scores.length; i++) {
                        score += scores[i].score;
                    };
                    return score;
                }
            }, {
                field: '',
                title: 'Round 2 Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: "iBrN6ErLcJxNcrWvJ", // replace with current comp _id
                        team_id: ctx._id,
                        round_id: "2"
                    }).fetch();
                    console.log(scores)
                    score = 0;
                    for (var i = 0; i < scores.length; i++) {
                        score += scores[i].score;
                    };
                    return score;
                }
            }, {
                field: '',
                title: 'Round 3 Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: "iBrN6ErLcJxNcrWvJ", // replace with current comp _id
                        team_id: ctx._id,
                        round_id: "3"
                    }).fetch();
                    console.log(scores)
                    score = 0;
                    for (var i = 0; i < scores.length; i++) {
                        score += scores[i].score;
                    };
                    return score;
                }
            }, {
                field: '',
                title: 'Round 4 Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: "iBrN6ErLcJxNcrWvJ", // replace with current comp _id
                        team_id: ctx._id,
                        round_id: "4"
                    }).fetch();
                    console.log(scores)
                    score = 0;
                    for (var i = 0; i < scores.length; i++) {
                        score += scores[i].score;
                    };
                    return score;
                }
            }, {
                field: '',
                title: 'Round 5 Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: "iBrN6ErLcJxNcrWvJ", // replace with current comp _id
                        team_id: ctx._id,
                        round_id: "5"
                    }).fetch();
                    console.log(scores)
                    score = 0;
                    for (var i = 0; i < scores.length; i++) {
                        score += scores[i].score;
                    };
                    return score;
                }
            }, {
                field: '',
                title: 'Total Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: "iBrN6ErLcJxNcrWvJ", // replace with current comp _id
                        team_id: ctx._id
                    }).fetch();
                    score = 0;
                    for (var i = 0; i < scores.length; i++) {
                        score += scores[i].score;
                    };
                    return score;
                }
            }],
            hoverable: true
        }
    }
});
