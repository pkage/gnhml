Template.team.helpers({
	// 'competition': function(){
	// 	return competitions;
	// },

	// 'competition_name': function(){
	// 	return this.name;
	// },
	collection: function(){
		return TeamTable.find({}, {sort: {score: -1, team: 1}});
	},

	settings: function(){
		return { 
			fields: [
				{key: 'name', label: 'Student Name'},
				{fieldId: 'date', key: 'date', label: function(value){ return value.date; }},
				{key: 'score', label: 'Total', fn: function(value){
					// sum up scores for each competition
				}}
			]
		};
	}
});