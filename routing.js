Router.route('/example', {
	template: 'example'
});

Router.route('/', {
	template: "splash"
});

Router.route('/season', {
	template: "season"
});

Router.route('/team', {
	template: "team"
});

Router.route('/admin', {
	template: "admin"
});

Router.route('/home', {
	template: 'home'
});

Router.route('/headup', {
    template: 'headup'
});

Router.route('/personal', {
    template: 'personal'
});

Router.route('/grader', {
	template: 'grader'
})

Router.route('/studentmgr', {
	template: 'studentmgr'
})

Router.route('/teammgr', {
	template: 'teammgr'
});

Router.route('/rounds', {
	template: 'rounds',
	waitOn: function() {
		return Meteor.subscribe('rounds');
	}
})

Router.route('/views', {
	template: 'views',
	waitOn: function() {
		return Meteor.subscribe('seasons');
	}
})

Router.route('/individual', {
	template: 'individual'
})
