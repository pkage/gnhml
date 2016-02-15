var Tables = new Meteor.Collection(null);
Tables.insert({
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
})

Template.personal.helpers({
    'personal_context': function() {
        var createFunc = function(comp_id) {
            return function(value, ctx) {
                var competition_score = 0;

                // map a function to each
                Scores.find({
                    competition_id: comp_id,
                    student_id: Meteor.user._id
                }).map(function(doc) {
                    competition_score += doc.score;
                })

                return competition_score;
            }
        }
        return {
            db: Competitions,
            selector: {},
            tracking: [{
                field: 'date',
                title: 'Competition Date'
            }, {
                field: '',
                title: 'Round 1 Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: ctx._id,
                        student_id: "3BWRKDRAx9J3todoG"
                    }).fetch();
                    console.log(ctx._id)
                    for (var i = 0; i < scores.length; i++) {
                        console.log(scores[i])
                    };
                    // console.log(ctx)
                    return 'hi';
                }
            }
            // , { 3BWRKDRAx9J3todoG
            //     field: 'scores',
            //     title: 'Round 2 Score',
            //     func: function(value, ctx) {
            //         return value[1].score;
            //     }
            // }, {
            //     field: 'scores',
            //     title: 'Round 3 Score',
            //     func: function(value, ctx) {
            //         return value[2].score;
            //     }
            // }, {
            //     field: 'scores',
            //     title: 'Round 4 Score',
            //     func: function(value, ctx) {
            //         return value[3].score;
            //     }
            // }, {
            //     field: 'scores',
            //     title: 'Round 5 Score',
            //     func: function(value, ctx) {
            //         return value[4].score;
            //     }
            // }, {
            //     field: 'scores',
            //     title: 'Round 6 Score',
            //     func: function(value, ctx) {
            //         return value[5].score;
            //     }
            // }, {
            //     field: 'scores',
            //     title: 'Total Score',
            //     func: function(value, ctx) {
            //         var total = 0;
            //         for (var i = 0; i < value.length; i++) {
            //             total += value[i].score;
            //         };
            //         return total;
            //     }
            // }
            ],
            hoverable: true
        }
    },

    'PersonalCollection': function() {
        console.log(personalArray);
        return personalArray.competitions;
    }
});
