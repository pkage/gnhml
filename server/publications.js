Meteor.publish('profiles', function() {
	return Profiles.find({});
})

Meteor.publish('teams', function() {
	return Teams.find({});
})

Meteor.publish('schools', function() {
	return Schools.find({});
});

Meteor.publish('scores', function() {
	return Scores.find({});
});

Meteor.publish('competitions', function() {
	return Competitions.find({});
})

Meteor.publish('seasons', function() {
	return Seasons.find({});
})

Meteor.publish('users', function() {
	if (Roles.userIsInRole(this.userId, ['admin'], Roles.GLOBAL_GROUP)) {
		return Meteor.users.find({});
	}
})