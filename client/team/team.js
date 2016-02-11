Template.team.onRendered(function() {
    // Session.set('currentTeam', Profiles.findOne(Meteor.userId()).team_id);
    // console.log(Session.get('currentTeam'));
    console.log("1" + Profiles.find({}).fetch());
    console.log("2" + Meteor.userId());
    console.log("4" + Meteor.userId().team_id);
});

Template.team.helpers({
	'team_context': function() {
        var tracking = [{
            field: 'name',
            title: 'Students',
            func: function(value, ctx){ 
                if (ctx.account_id == null){
                    return value;
                }
            }
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
            selector: {},
            tracking: tracking,
            hoverable: true
        }
    }
});