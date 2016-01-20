Meteor.startup(function() {
	// ensure i always have admin access
	if (Profiles.find({'email': 'pkage16@choate.edu'}).count() > 0) {
		prof = Profiles.findOne({'email': 'pkage16@choate.edu'});
		if (prof.account_id != null) {
			Roles.addUsersToRoles(prof.account_id, 'admin', Roles.GLOBAL_GROUP);
		}
	}
})

