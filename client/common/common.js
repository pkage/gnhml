// startup
Meteor.startup(function() {
	sAlert.config({
		effect: 'stackslide',
		position: 'bottom-right'
	});
	Session.set('userProfile', {});
})

// Visibility helpers
UI.registerHelper('isAdmin', function() {
	return true;
	return Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP);
})

UI.registerHelper('isCoach', function() {
	return true;
	return Roles.userIsInRole(Meteor.userId(), 'coach', Roles.GLOBAL_GROUP);
})

UI.registerHelper('isStudent', function() {
	return true;
	return !(Roles.userIsInRole(Meteor.userId(), 'coach', Roles.GLOBAL_GROUP) || Roles.userIsInRole(Meteor.userId(), 'grader', Roles.GLOBAL_GROUP));
})

UI.registerHelper('isGrader', function() {
	return true;
	return Roles.userIsInRole(Meteor.userId(), 'grader', Roles.GLOBAL_GROUP);
})

UI.registerHelper('bounceLoggedOut', function() {
	if (Meteor.userId() == null) {
		Router.go('/');
	}
})