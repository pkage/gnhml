var headupArray = {
    date: new Date(), //temp, in the future using new data format for competition date
    season: 'season_id', //temp
    teams: [{
        team_name: 'choate_team_id',
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
        team_name: 'exeter_team_id',
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
    'HeadupCollection': function() {
        console.log(headupArray);
        return headupArray.teams;
    },

    tableSettings: function() {
        return {
            fields: [{
                key: 'team_name',
                label: 'Teams'
            }, {
                key: 'scores',
                label: 'Round 1 Score',
                fn: function(value, object) {
                    return value[0].score;
                }
            }, {
                key: 'scores',
                label: 'Round 2 Score',
                fn: function(value, object) {
                    return value[1].score;
                }
            }, {
                key: 'scores',
                label: 'Round 3 Score',
                fn: function(value, object) {
                    return value[2].score;
                }
            }, {
                key: 'scores',
                label: 'Round 4 Score',
                fn: function(value, object) {
                    return value[3].score;
                }
            }, {
                key: 'scores',
                label: 'Round 5 Score',
                fn: function(value, object) {
                    return value[4].score;
                }
            }, {
                key: 'scores',
                label: 'Round 6 Score',
                fn: function(value, object) {
                    return value[5].score;
                }
            }, {
                key: 'scores',
                label: 'Total Score',
                fn: function(value, object) {
                    var total = 0;
                    console.log(value);
                    for (var i = 0; i < value.length; i++) {
                        total += value[i].score;
                    };
                    return total;
                }
            }]
        };
    }
});
