Template.navigation.events({
	'click .togglenav': function() {
		$('.navpage').transition('fade right');
	},
	'click #logout': function() {
		Meteor.logout(function() {
			Router.go('/');
		});
	}
})

Template.navigation.helpers({
	'logoutManager': function() {
		if (!('allowLoggedOut' in this) && Meteor.userId() == null) {
			Router.go('/');
		}
	}
})