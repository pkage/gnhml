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
	'team': function(){
		return teams;
	},

	'name': function(){
		return this.name;
	}
});