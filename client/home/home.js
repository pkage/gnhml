Template.home.helpers({
    'schedule_context': function() {
        return {
            db: Competitions,
            selector: {},
            sortable: false,
            tracking: [{
                field: 'date',
                title: 'Upcoming Competitions',
                func: function(value, ctx) {
                    return String(value).substring(0, 15);
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
            db: Competitions,
            selector: {},
            sortable: false,
            tracking: [{
                field: 'date',
                title: 'Individual Highscore',
                func: function(value, ctx) {
                    return String(value).substring(0, 15);
                }
            }],
            hoverable: true,
            customCSS: "table-style-class"
        }
    },
    tweets: function() {
        return Tweets.find();
    }
});
