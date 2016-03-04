Template.home.helpers({
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
    },
    comps: function() {
        var arr = [];
        for (var i = 0; i < Competitions.find().fetch().length; i++) {
            var date1 = new Date(String(Competitions.find().fetch()[i].date));
            var date2 = new Date();
            if (date1.getTime() > date2.getTime()) {
                arr.push({date: String(Competitions.find().fetch()[i].date).substring(0, 15)});
            }
        };
        return arr;
    }
});
