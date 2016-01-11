Template.navigation.events({
	'click .togglenav': function() {
		$('.navpage').transition('fade down');
	},
	'click #logout': function() {
		Meteor.logout();
	}
})