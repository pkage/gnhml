Template.admin.rendered = function() {
	Session.set('admin_active', 'admin_schools');
}


Template.admin.helpers({
	'adminsubview': function() {
		return Session.get('admin_active');
	},
	'activetab_watcher': function() {
		$('.admintab').removeClass('active');
		$('[data-template="' + Session.get('admin_active') + '"').addClass('active');
	}
})

Template.admin.events({
	'click .admintab': function(ev, tm) {
		Session.set('admin_active', $(ev.target).data('template'));
	}
})
