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
				field: 'competition_id',
				title: Competitions.findOne(_id).date.toString()
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