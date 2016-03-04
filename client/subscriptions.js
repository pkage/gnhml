Meteor.startup(function() {
	Meteor.subscribe('profiles')
	Meteor.subscribe('teams');
	Meteor.subscribe('schools');
	Meteor.subscribe('scores');
	Meteor.subscribe('competitions');
	Meteor.subscribe('seasons');
    Meteor.subscribe('headup');
    Meteor.subscribe('rounds');
});
