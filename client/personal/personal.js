Template.personal.onRendered(function() {
    Session.set('view-season', Seasons.find().fetch()[0]._id);
})

Template.personal.helpers({
    'notStudent': function(){
        return Profiles.findOne({account_id: Meteor.userId()}) == null;
    },
    'currentProfile': function() {
        return Profiles.findOne({account_id: Meteor.userId()});
    },
    'personal_context': function() {
        var season_id = Session.get('view-season');
        var current_student = this._id;

        var tracking = [{
            field: 'date',
            title: 'Competitions',
            func: function(value){
                return value.toDateString();
            }
        }];

        var createFunc = function(round) {
            return function(value, ctx){
                var competition_score = 0;

                Scores.find({
                    competition_id: ctx._id,
                    round_id: round,
                    student_id: current_student
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
                    competition_id: ctx._id,
                    student_id: current_student
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

        if (season_id == 1) {
            return {
                db: Competitions,
                selector: {},
                tracking: tracking,
                hoverable: true
            }
        }
        else {
            return {
                db: Competitions,
                selector: {season: season_id},
                tracking: tracking,
                hoverable: true
            }
        }
        
    }
});
