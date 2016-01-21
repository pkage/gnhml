Template.seasontwo.helpers({
	'competition': function(){
		return Competitions.find({});
	},

	'competition_date': function(){
		return this.date;
	},

	'team': function(){
		return Teams.find({});
	},

	'team_name': function(){
		return this.name;
	},

	'random_score': function(){
		return Math.floor(Math.random() * 10);
	}
})