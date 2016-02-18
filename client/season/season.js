Template.season.onRendered(function() {
    Session.set('teamview-season', null);
});

Template.season.helpers({
    'season_context': function() {
        var season_id = Session.get('teamview-season');

        var tracking = [{
            field: 'name',
            title: 'Teams'
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
                    competition_id: comp_id,
                    team_id: ctx._id,
                }).map(function(doc) {
                    competition_score += doc.score;
                })
                return competition_score;
            }
        }

        for (var c = 0; c < competitions.length; c++) {
            var _id = competitions[c]._id;
            console.log('prepping: ' + _id);
            tracking.push({
                field: '',
                title: Competitions.findOne(_id).date.toDateString(),
                func: createFunc(_id)
            })
        }

        var totalFunc = function(){
            return function(value, ctx) {
                var team_score = 0;
                // map a function to each
                Scores.find({
                    team_id: ctx._id,
                    competition_id: {$in: Session.get('competition_ids')}
                }).map(function(doc) {
                    team_score += doc.score;
                })

                return team_score;
            }
        }

        tracking.push({
            field: '',
            title: 'Total',
            func: totalFunc()
        })

        return {
            db: Teams,
            selector: {},
            tracking: tracking,
            hoverable: true
        }
    }
})
