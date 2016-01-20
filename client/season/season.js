var Tables = new Meteor.Collection(null);

Template.season.onCreated(function() {
    Tables.remove({});
    Tables.insert({
        team_name: 'Choate',
        scores: [{
            competition_date: "9-18-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "10-24-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "12-19-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "1-16-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "3-31-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "4-4-2016",
            score: Math.floor(Math.random() * 10)
        }]
    });
    Tables.insert({
        team_name: 'Philips',
        scores: [{
            competition_date: "9-18-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "10-24-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "12-19-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "1-16-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "3-31-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "4-4-2016",
            score: Math.floor(Math.random() * 10)
        }]
    });
    Tables.insert({
        team_name: 'Andover',
        scores: [{
            competition_date: "9-18-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "10-24-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "12-19-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "1-16-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "3-31-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "4-4-2016",
            score: Math.floor(Math.random() * 10)
        }]
    });


    Template.fields = [{
        fieldId: 'team_name',
        key: 'team_name',
        label: 'Teams'
    }, {
        fieldId: 'total',
        key: 'scores',
        label: 'Total Score',
        fn: function(value, object) {
            var total_score = 0;
            for (var n = 0; n < Tables.find().fetch()[0].scores.length; n++) {
                total_score += value[n].score;
            }
            return total_score;
        }
    }]

    this.autorun(function() {
        for (var n = 0; n < Tables.find().fetch()[0].scores.length; n++) {
            Template.fields.splice(1, 0, {
                fieldId: 'competition' + n,
                key: 'scores',
                label: function() {
                    return Tables.find().fetch()[0].scores[0].competition_date;
                },
                fn: function(value, object) {
                    return value[0].score;
                }
            });
        }
    });
});

Template.season.helpers({
    'seasonCollection': function() {
        return Tables;
    },

    'seasonSettings': function() {
        console.log(Template.fields)
        return {
            showFilter: false,
            fields: Template.fields
        }
    }
})
