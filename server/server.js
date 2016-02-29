// helper functions
bounceLoggedOut = function() {
	// throw an error if a user isn't logged in
	if (Meteor.userId() == null) {
		throw new Meteor.Error('unauthorized', 'not logged in');
	}
}

// because typing this out every time is a real drag
checkRole = function(role) {
	return Roles.userIsInRole(Meteor.userId(), role, Roles.GLOBAL_GROUP);
}

restrictToAdmin = function() {
	bounceLoggedOut(); // bounce logged out users

	// ensure that the current user is an administrator
	if (!checkRole('admin')) {
		throw new Meteor.Error('unauthorized', 'must be admin for this action');
	}
}

restrictToCoach = function() {
	bounceLoggedOut(); // bounce logged out users

	// ensure that the current user is an administrator
	if (!checkRole('coach') && !checkRole('admin')) {
		throw new Meteor.Error('unauthorized', 'must be coach or admin for this action');
	}
}

// callable methods
Meteor.methods({
	'updateSchoolName': function(schoolid, name) {
		restrictToAdmin(); // admin only

		// ensure that the args are strings
		check(schoolid, String);
		check(name, String);

		// update the school name
		return Schools.update({_id: schoolid}, {$set: {name: name}});
	},
	'checkForBindableProfiles': function() {
		bounceLoggedOut(); // need to be logged in for this
		console.log("binding profiles for " + Meteor.userId());

		// find the user's email
		var email = Meteor.user().emails[0].address;

		// check if profiles exist that reference that email
		if (Profiles.find({'email': email}).count() > 0) {
			// set those profiles' account_id to the user_id of the current user
			var profiles = Profiles.update({'email': email}, {$set: {account_id: Meteor.userId()}});
			console.log('bound ' + profiles + ' profile to user ' + Meteor.userId());
		}
	},
	'createTeam': function(schoolid, name, level) {
		// security checks
		bounceLoggedOut();
		restrictToCoach();
		check(name, String);
		check(schoolid, String);
		check(level, String);

		// create the team
		return Teams.insert({
			name: name,
			school_id: schoolid,
			level: level
		})
	},
	'deleteTeam': function(id) {
		bounceLoggedOut();
		restrictToCoach();
		check(id, String);

		var affected = _.pluck(Profiles.find({team_id: id}).fetch(), '_id');
		_.each(affected, function(_id) {
			Profiles.update(_id, {$set: {team_id: null}});
		});


		return Teams.remove(id);
	},
	'assignToTeam': function(profile_id, team_id) {
		bounceLoggedOut();
		restrictToCoach();
		check(profile_id, String);
		check(team_id, String);

		if (team_id == "none") {
			team_id = null;
		}

		return Profiles.update(profile_id, {$set: {team_id: team_id}})
	},
	'addStudent': function(obj) {
		restrictToCoach();
		check(obj.school, String);
		check(obj.name, String);
		check(obj.email, String);

		Profiles.insert({
			name: obj.name,
			email: obj.email,
			school_id: obj.school,
			account_id: null,
			team_id: (obj.team == undefined) ? null : obj.team,
			class: obj.year
		})
	},
	'addSchool': function(name) {
		restrictToAdmin();
		check(name, String);

		return Schools.insert({
			name: name
		});
	},
	'addRound': function(col, row) {
		return SelectedRounds.insert({
			col: col,
			row: row
		});
	},
	'deleteRound': function(col, row) {
		return SelectedRounds.remove({
			col: col,
			row: row
		});
	},
	'emptyRounds': function(){
		return SelectedRounds.remove({});
	}
});