var teams = [{
    name: "Rofl Coptor",
    school_id: "choate",
    level: "Varsity"
}, {
    name: "Lol Coptor",
    school_id: "exeter",
    level: "Varsity"
}];


Template.season.helpers({
	'competition': function(){
		return competitions;
	},

	'competition_name': function(){
		return this.name;
	},

	'team': function(){
		return teams;
	},

	'team_name': function(){
		return this.name;
	}
});