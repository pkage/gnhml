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