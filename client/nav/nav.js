Template.navigation.events({
	'click .togglenav': function() {
		$('.navpage').transition('fade right');
	},
	'click #logout': function() {
		console.log('logging out')
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
	},
	'sessionProfileManager': function() {
		Session.set('userProfile', Profiles.findOne({account_id: this._id}));
	}
})