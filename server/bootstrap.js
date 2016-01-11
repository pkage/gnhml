var scores_all_approach = [{
	_id: "1",
	_competition_id: "1",
	_team_id: "roflcoptor",
	scores: [
	[1, 2, 3],
	[1, 2, 3],
	[0, 0, 3]
	]
}, {
	_id: "2",
	_competition_id: "1",
	_team_id: "roflcoptor",
	scores: [
	[0, 2, 0],
	[1, 0, 3],
	[0, 1, 3]
	]
}, {
	_id: "3",
	_competition_id: "1",
	_team_id: "lolcoptor",
	scores: [
	[0, 1, 1],
	[1, 1, 2],
	[1, 1, 2]
	]
}];

var scores_competition_approach = [{
	_competition_id: "1",
	teams: [{
		_team_id: "roflcoptor",
		members: [{
			_id: "1",
			scores: [
			[0, 1, 1],
			[1, 1, 2],
			[1, 1, 2]
			]
		}, {
			_id: "2",
			scores: [
			[0, 2, 0],
			[1, 0, 3],
			[0, 1, 3]
			]
		}]
	}, {
		_team_id: "lolcoptor",
		members: [{
			_id: "3",
			scores: [
			[0, 1, 1],
			[1, 1, 2],
			[1, 1, 2]
			]
		}]
	}]
}, {
	_competition_id: "2",
	teams: [{
		_team_id: "roflcoptor",
		members: [{
			_id: "1",
			scores: [
			[0, 1, 1],
			[1, 1, 2],
			[1, 1, 2]
			]
		}, {
			_id: "2",
			scores: [
			[0, 2, 0],
			[1, 0, 3],
			[0, 1, 3]
			]
		}]
	}, {
		_team_id: "lolcoptor",
		members: [{
			_id: "3",
			scores: [
			[0, 1, 1],
			[1, 1, 2],
			[1, 1, 2]
			]
		}]
	}]
}];

Meteor.startup(function() {
	if (Schools.find().count() == 0) {
		var schools = [{
		    name: "Choate Rosemary Hall"
		}, {
		    name: "Philips Exeter Academy"
		}];
		var choate_id = Schools.insert(schools[0]);
		var exeter_id = Schools.insert(schools[1]);
	}
	if (Teams.find().count() == 0) {
		var teams = [{
			name: "Rofl Copter",
			school_id: choate_id,
			level: "varsity"
		}, {
			name: "Lol Copter",
			school_id: exeter_id,
			level: "varsity"
		}];

		var exeter_team_id = Teams.insert(teams[0]);
		var choate_team_id = Teams.insert(teams[1]);
	}
	if (Profiles.find().count() == 0) {
		var profiles = [{
			name: "Jessica Shi",
			email: "jshi17@choate.edu",
			class: "2017",
			team_id: choate_team_id,
			school_id: choate_id,
		}, {
			name: "Philip Xu",
			email: "jxu16@choate.edu",
			class: "2016",
			team_id: choate_team_id,
			school_id: choate_id,
		}, {
			name: "Prep Prepington",
			email: "pprepington@exeter.edu",
			class: "2017",
			team_id: exeter_team_id,
			school_id: exeter_id,
		}];
		for (var i = 0; i < profiles.length; i++) {
			Profiles.insert(profiles[i]);
		}
	}
	if (Seasons.find().count() == 0) {
		var season_id = Seasons.insert({date: new Date()});
	}
	if (Competitions.find().count() == 0) {
		var competition_id = Competitions.insert({
			date: new Date(),
			season: season_id,
			teams: [choate_team_id, exeter_team_id]
		})
	}

});