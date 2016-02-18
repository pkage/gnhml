Template.team.onRendered(function() {
    Session.set('teamview-season', null);
});

Template.team.helpers({
    'currentProfile': function() {
        return Profiles.findOne({account_id: Meteor.userId()});
    },
    'team_name': function(){
        return Teams.findOne(this.team_id).name;
    },
	'team_context': function() {
        var season_id = Session.get('teamview-season');

        var tracking = [{
            field: 'name',
            title: 'Students'
        }];

        if (season_id == 1){ // all seasons
            var competitions = Competitions.find({}).fetch();
        }
        else {
            var competitions = Competitions.find({season: season_id}).fetch();
        }

        Session.set('competition_ids', _.pluck(competitions, '_id'));


        var createFunc = function(comp_id) {
            return function(value, ctx) {
                var competition_score = 0;

                // map a function to each
                Scores.find({
                    student_id: ctx._id,
                    competition_id: comp_id
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
                    student_id: ctx._id,
                    competition_id: {$in: Session.get('competition_ids')}
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