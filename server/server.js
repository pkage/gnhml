// god damn nothing here

bounceLoggedOut = function() {
	if (Meteor.userId() == null) {
		throw new Meteor.Error('unauthorized');
	}
}



Meteor.methods({
	'editSchoolName': function(schoolid, text) {

	},
	'checkForBindableProfiles': function() {
		bounceLoggedOut();
		console.log("binding profiles for " + Meteor.userId());
		var email = Meteor.user().emails[0].address;
		if (Profiles.find({'email': email}).count() > 0) {
			var profiles = Profiles.update({'email': email}, {$set: {account_id: Meteor.userId()}});
			console.log('bound ' + profiles + ' profile to user ' + Meteor.userId());
		}
	}
});

Meteor.startup(function () {
	var competition_dates = [];
	if (Seasons.find().count() === 0) {
		var teams = Teams.find({}).fetch();
		var team_names = [];
		for (var i = 0; i < teams.length; i++) {
			team_names.push(teams[i].name);
		}

		var competitions = Competitions.find({}).fetch();
		for (var i = 0; i < competitions.length; i++) {
			competition_dates.push(competitions[i].date);
		}

		var scores = Scores.find({}).fetch();
		var score_totals = []; // 2d array??
		for (var i = 0; i < team_names.length; i++) {
			for (var j = 0; j < competition_dates.length; j++) {
				// query for all scores matching team and date + total
				score_totals[i+j] = i+j; // temporary score
			}
		}
		

		for (var i = 0; i < team_names.length; i++) {
			for (var j = 0; j < competition_dates.length; j++) {
				Seasons.insert({
					team: team_names[i],
					date: competition_dates[j],
					score: score_totals[i+j]
				});
			}
		}
	}

	if (Teams.find().count() === 0) {
		var profiles = Profiles.find({}).fetch();
		var student_names = [];
		for (var i = 0; i < profiles.length; i++) {
			student_names.push(profiles[i].name);
		}

		// competitions same as previously, already added

		var scores = Scores.find({}).fetch();
		var score_totals = []; // 2d array??
		for (var i = 0; i < student_names.length; i++) {
			for (var j = 0; j < competition_dates.length; j++) {
				// query for all scores matching student and date + total
				score_totals[i+j] = i+j; // temporary score
			}
		}

		for (var i = 0; i < student_names.length; i++) {
			for (var j = 0; j < competition_dates.length; j++) {
				Teams.insert({
					student: student_names[i],
					date: competition_dates[j],
					score: score_totals[i+j]
				});
			}
		}
	}
});