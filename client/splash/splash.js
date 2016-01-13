Template.splash.events({
	'click .jumbotron': function() {
		console.log('clicked jumbotron');
		$('.loginpage').transition('fade up');
	}
})

Template.splash.helpers({
	'redirectToHome': function() {
		if (Meteor.userId() != null) {
			Router.go('home');
		}
	}
})