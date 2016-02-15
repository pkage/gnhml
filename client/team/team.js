Template.team.helpers({
    'currentProfile': function() {
        return Profiles.findOne({account_id: Meteor.userId()});
    },
	'team_context': function() {
        var tracking = [{
            field: 'name',
            title: 'Students'
        }];

        var competitions = Competitions.find({}).fetch();

        var createFunc = function(comp_id) {
            return function(value, ctx) {
                var competition_score = 0;

                // map a function to each
                Scores.find({
                    competition_id: comp_id,
                    student_id: ctx._id
                }).map(function(doc) {
                    competition_score += doc.score;
                })

                return competition_score;
            }
        }

        for (var c = 0; c < competitions.length; c++) {
            var _id = competitions[c]._id;
            tracking.push({
                field: '',
                title: Competitions.findOne(_id).date.toDateString(),
                func: createFunc(_id)
            })
        }

        var totalFunc = function(){
            return function(value, ctx) {
                var student_score = 0;
                // map a function to each
                Scores.find({
                    student_id: ctx._id
                }).map(function(doc) {
                    student_score += doc.score;
                })

                return student_score;
            }
        }

        tracking.push({
            field: '',
            title: 'Total',
            func: totalFunc()
        })

        return {
            db: Profiles,
            selector: {team_id: this.team_id},
            tracking: tracking,
            hoverable: true
        }
    }
});