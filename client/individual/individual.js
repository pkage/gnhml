Template.individual.helpers({
	'currentProfile': function() {
        return Profiles.findOne({account_id: Meteor.userId()});
    },
	'individual_context': function() {
        var season_id = Session.get('view-season');
        if (season_id == 1){
        	season_id = "";
        }

        var tracking = [{
        	field: 'date',
        	title: 'Competitions',
        	func: function(value){
        		console.log(value);
        		return value.toDateString();
        	}
        }];

        var createFunc = function() {
        	return function(value, ctx){
        		console.log("hi");
        		console.log(ctx);
        		return 0;
        	}
        }

        var r = "Round ";
        for (var i = 1; i < 6; i++) {
        	tracking.push({
        		field: '',
        		title: r.concat(i),
        		func: createFunc()
        	});
        }

        var totalFunc = function() {
            return function(value, ctx){
                return 0;
            }
        }

        tracking.push({
            field: '',
            title: 'Total',
            func: totalFunc()
        });

        return {
            db: Competitions,
            selector: {season: season_id},
            tracking: tracking,
            hoverable: true
        }
    }
})