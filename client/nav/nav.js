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