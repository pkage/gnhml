
// Visibility helpers
UI.registerHelper('isAdmin', function() {
	// TODO: check this
	return true;
})

UI.registerHelper('isCoach', function() {
	// TODO: un-stub this
	return Roles.userIsInRole(Meteor.userId(), 'coach', Roles.GLOBAL_GROUP);
})

UI.registerHelper('isStudent', function() {
	// TODO: remove todos
	return !(Roles.userIsInRole(Meteor.userId(), 'coach', Roles.GLOBAL_GROUP) || Roles.userIsInRole(Meteor.userId(), 'grader', Roles.GLOBAL_GROUP));
})

UI.registerHelper('isGrader', function() {
	// TODO: check this role
	return Roles.userIsInRole(Meteor.userId(), 'grader', Roles.GLOBAL_GROUP);
})

UI.registerHelper('bounceLoggedOut', function() {
	if (Meteor.userId() == null) {
		Router.go('/');
	}
})