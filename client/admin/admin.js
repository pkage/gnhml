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


Template.admin_schools.rendered = function() {
	console.log('rendered admin_schools');
	Session.set('selected', '');
}

Template.admin_schools.helpers({
	'schools': function() {
		return Schools.find({});
	},
	'activeSchool': function() {
		var school = Schools.findOne({_id: Session.get('selected')});
		return (school == null) ? {} : school; // make sure that #with get's /something/
	}
})

Template.admin_schools.events({
	'click .school': function() {
		Session.set('selected', this._id);
		$('#editSchoolModal').transition('fade down');
	}
})