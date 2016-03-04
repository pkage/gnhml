Template.home.helpers({
    'schedule_context': function() {
        return {
            db: Competitions,
            selector: {},
            sortable: false,
            tracking: [{
                field: '',
                title: 'Competitions',
                func: function(value, ctx) {
                    console.log(ctx)
                    var date1 = new Date(String(ctx.date));
                    var date2 = new Date();
                    if (date1.getTime() > date2.getTime()) {
                        return String(ctx.date).substring(0, 15);
                    }
                }
            }],
            hoverable: true,
            customCSS: "table-style-class"
        }
    },
    'team_highscore_context': function() {
        return {
            db: TeamHighscore,
            selector: {},
            tracking: [{
                field: '',
                title: 'Team',
                func: function(value, ctx) {
                    return String(ctx.team_name);
                },
                sortable: false
            }, {
                field: '',
                title: 'Score',
                func: function(value, ctx) {
                    return String(ctx.score);
                },
                sortable: false,
            }],
            hoverable: true,
            customCSS: "table-style-class"
        }
    },
    'individual_highscore_context': function() {
        return {
            db: IndividualHighscore,
            selector: {},
            sortable: false,
            tracking: [{
                field: '',
                title: 'Student',
                func: function(value, ctx) {
                    return String(ctx.name);
                },
                sortable: false
            }, {
                field: '',
                title: 'Score',
                func: function(value, ctx) {
                    return String(ctx.score);
                },
                sortable: false,
            }],
            hoverable: true,
            customCSS: "table-style-class"
        }
    },
    tweets: function() {
        return Tweets.find();
    }
});
