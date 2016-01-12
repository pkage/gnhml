
// Visibility helpers
UI.registerHelper('isAdmin', function() {
	// TODO: check this
	return true;
})

UI.registerHelper('isCoach', function() {
	// TODO: un-stub this
	return true;
})

UI.registerHelper('isStudent', function() {
	// TODO: remove todos
	return true;
})

UI.registerHelper('isGrader', function() {
	// TODO: check this role
	return true;
})

UI.registerHelper('bounceLoggedOut', function() {
	if (Meteor.userId() == null) {
		Router.go('splash');
	}
})