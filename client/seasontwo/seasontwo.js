Template.seasontwo.helpers({
	// 'competition': function(){
	// 	return Competitions.find({});
	// },

	// 'competition_date': function(){
	// 	return this.date;
	// },

	// 'team': function(){
	// 	return Teams.find({});
	// },

	// 'team_name': function(){
	// 	return this.name;
	// },

	// 'random_score': function(){
	// 	return Math.floor(Math.random() * 10);
	// }

	'season_context': function() {
		var tracking = [
			{
				field: 'name',
				title: 'Teams'
			}
		];

		var competitions = Competitions.find({}).fetch();

		for (var c = 0; c < competitions.length; c++) {
			var _id = competitions[c]._id;
			tracking.push({
				field: '',
				title: Competitions.findOne(_id).date.toString(),
				func: function(value, ctx) {
					var temp_scores = Scores.find({competition_id: _id, team_id: ctx._id}).fetch();
					var competition_score = 0;
					for (var i = 0; i < temp_scores.length; i++) {
						competition_score += temp_scores[i].score;
					}
					console.log(Competitions.find({}).fetch());
					console.log(Scores.find({}).fetch());
					console.log("_id:" + _id);
					return competition_score;
				}
			})
		}

		return {
			db: Teams,
			selector: {},
			tracking: tracking,
			hoverable: true
		}
	}
})