Template.personal.helpers({
    'personal_context': function() {
        return {
            db: Competitions,
            selector: {},
            tracking: [{
                field: 'date',
                title: 'Competition Date',
                func: function(value, ctx) {
                    return String(value).substring(0, 15);
                }
            }, {
                field: '',
                title: 'Round 1 Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: ctx._id,
                        student_id: "3BWRKDRAx9J3todoG" // Session.get('userProfile')._id
                    }).fetch();
                    score = 0;
                    for (var i = 0; i < scores.length; i++) {
                        if (scores[i].round_id === "1") {
                            score += scores[i].score;
                        };
                    };
                    return score;
                }
            }, {
                field: '',
                title: 'Round 2 Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: ctx._id,
                        student_id: "3BWRKDRAx9J3todoG"
                    }).fetch();
                    score = 0;
                    for (var i = 0; i < scores.length; i++) {
                        if (scores[i].round_id === "2") {
                            score += scores[i].score;
                        };
                    };
                    return score;
                }
            }, {
                field: '',
                title: 'Round 3 Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: ctx._id,
                        student_id: "3BWRKDRAx9J3todoG"
                    }).fetch();
                    score = 0;
                    for (var i = 0; i < scores.length; i++) {
                        if (scores[i].round_id === "3") {
                            score += scores[i].score;
                        };
                    };
                    return score;
                }
            }, {
                field: '',
                title: 'Round 4 Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: ctx._id,
                        student_id: "3BWRKDRAx9J3todoG"
                    }).fetch();
                    score = 0;
                    for (var i = 0; i < scores.length; i++) {
                        if (scores[i].round_id === "4") {
                            score += scores[i].score;
                        };
                    };
                    return score;
                }
            }, {
                field: '',
                title: 'Round 5 Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: ctx._id,
                        student_id: "3BWRKDRAx9J3todoG"
                    }).fetch();
                    score = 0;
                    for (var i = 0; i < scores.length; i++) {
                        if (scores[i].round_id === "5") {
                            score += scores[i].score;
                        };
                    };
                    return score;
                }
            }, {
                field: '',
                title: 'Total Score',
                func: function(value, ctx) {
                    scores = Scores.find({
                        competition_id: ctx._id,
                        student_id: "3BWRKDRAx9J3todoG"
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
