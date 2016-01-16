var personalArray = {
    name: 'Philip', //temp, in the future using new data format for competition date
    team: 'Choate', //temp
    competitions: [{
        date: 'Jan. 1',
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
        date: 'Jan. 2',
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
        date: 'Jan. 3',
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
        date: 'Jan. 4',
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

Template.personal.helpers({
    'PersonalCollection': function() {
        console.log(personalArray);
        return personalArray.competitions;
    },

    tableSettings: function() {
        return {
            fields: [{
                key: 'date',
                label: 'Competition Date'
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
                    for (var i = 0; i < value.length; i++) {
                        total += value[i].score;
                    };
                    return total;
                }
            }]
        };
    }
});
