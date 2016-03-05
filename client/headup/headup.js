Template.headup.onRendered(function() {
})

Template.headup.helpers({
    'currentCompetition': function() {
        // need to fix to reflect current competition
        return Meteor.call('getActiveCompetition') != null;
    },
    'comp': function() {
        if (Session.get('view-competition') == "") {
            return Meteor.call('getActiveCompetition')._id;
        }
        else {
            return Session.get('view-competition');
        }
    },  
    'headup_context': function() {
        var current_comp = this.toString();

        var tracking = [{
            field: 'name',
            title: 'Team Names'
        }];

        var createFunc = function(round) {
            return function(value, ctx){
                var competition_score = 0;

                Scores.find({
                    competition_id: current_comp,
                    round_id: round,
                    team_id: ctx._id
                }).map(function(doc) {
                    competition_score += doc.score;
                })

                return competition_score;
            }
        }

        var r = "Round ";
        for (var i = 1; i < 6; i++) {
            tracking.push({
                field: '',
                title: r.concat(i),
                func: createFunc(i.toString())
            });
        }

        var totalFunc = function() {
            return function(value, ctx){
                var competition_score = 0;

                Scores.find({
                    competition_id: current_comp,
                    team_id: ctx._id
                }).map(function(doc) {
                    competition_score += doc.score;
                })

                return competition_score;
            }
        }

        tracking.push({
            field: '',
            title: 'Total',
            func: totalFunc()
        });

        return {
            db: Teams,
            selector: {},
            tracking: tracking,
            hoverable: true
        }
    }
});
