// helper functions
bounceLoggedOut = function() {
	// throw an error if a user isn't logged in
	if (Meteor.userId() == null) {
		throw new Meteor.Error('unauthorized', 'not logged in');
	}
}

restrictToAdmin = function() {
	bounceLoggedOut(); // bounce logged out users

	// ensure that the current user is an administrator
	if (!Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP)) {
		throw new Meteor.Error('unauthorized', 'must be admin for this action');
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
	}
});