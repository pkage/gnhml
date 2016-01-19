Template.season.helpers({
	// 'competition': function(){
	// 	return competitions;
	// },

	// 'competition_name': function(){
	// 	return this.name;
	// },

	// 'team': function(){
	// 	return teams;
	// },

	// 'team_name': function(){
	// 	return this.name;
	// }

	collection: function(){
		return SeasonTable.find({});
	},

	settings: function(){
		return { 
			fields: [
				{key: 'team', label: 'Team Name'},
				// {fieldId: 'date', key: 'date', label: function(value){ return value.date; }}
				// // {key: 'score', label: 'Total', fn: function(value){
				// // 	// sum up scores for each competition
				// // }}
			]
		};
	}
});
