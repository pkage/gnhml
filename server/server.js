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
	'createTeam': function(name, ids, schoolid, level) {
		// security checks
		bounceLoggedOut();
		restrictToCoach();
		check(name, String);
		check(ids, Array);
		check(schoolid, String);
		check(level, String);
		ids.forEach(function(val) {check(val, String)});


		// force the list to a unique state, in case the client screwed it up
		ids = _.uniq(ids);

		// create the team
		var teamid = Teams.insert({
			name: name,
			school_id: schoolid,
			level: level
		})

		for (var c = 0; c < ids.length; c++) {
			Profiles.update(ids[c], {$set: {team_id: teamid}});
		}
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
	}
});