// god damn nothing here
Meteor.methods({

});

SeasonTable = new Meteor.Collection("season");
TeamTable = new Meteor.Collection("team");

Meteor.startup(function () {
	if (Season.find().count() === 0) {
		var teams = Teams.find({}).fetch();
		var team_names = [];
		for (var i = 0; i < teams.length; i++) {
			team_names.push(teams[i].name);
		}

		var competitions = Competitions.find({}).fetch();
		var competition_dates = [];
		for (var i = 0; i < competitions.length; i++) {
			competition_names.push(competitions[i].date);
		}

		var scores = Scores.find({}).fetch();
		var score_totals = []; // 2d array??
		// query for all scores matching team and date + total
		

		for (var i = 0; i < team_names.length; i++) {
			for (var j = 0; j < competition_dates.length; j++) {
				SeasonTable.insert({
					team: team_names[i],
					date: competition_dates[j],
					score: score_totals[i+j]
				});
			}
		}
	}
});