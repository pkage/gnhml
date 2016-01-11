Template.splash.events({
	'click .jumbotron': function() {
		console.log('clicked jumbotron');
		$('.loginpage').transition('fade up');
	}
})