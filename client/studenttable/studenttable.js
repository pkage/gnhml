Template.studenttable.helpers({
	'student_context': function(id) {
        var season_id = Session.get('view-season');

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

                console.log(student_score);
                return student_score;
            }
        }

        tracking.push({
            field: '',
            title: 'Total',
            func: totalFunc()
        })

        var id = Session.get('current-team-id');
        if (id == "none") {
	        return {
	            db: Profiles,
	            selector: {},
	            tracking: tracking,
	            hoverable: true
	        }
	    }
	    else {
	    	return {
	            db: Profiles,
	            selector: {team_id: id},
	            tracking: tracking,
	            hoverable: true
	        }
	    }
    }
})