AccountsTemplates.configure({
	'onSubmitHook': function(err, state) {
		console.log(err);
		if (err == null) {
			Meteor.call('checkForBindableProfiles');
		}
	}
})