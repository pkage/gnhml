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


// school shite
Template.admin_schools.rendered = function() {
	Session.set('selected', '');
}

Template.admin_schools.helpers({
	'schools': function() {
		return Schools.find({});
	},
	'activeSchool': function() {
		var school = Schools.findOne({_id: Session.get('selected')});
		return (school == null) ? {} : school; // make sure that #with get's /something/
	},
	'school_members': function() {
		return Profiles.find({school_id: this._id}).count();
	},
	'school_teams': function() {
		return Teams.find({school_id: this._id}).count();
	},
	'as_context': function() {
		return {
			db: Schools,
			selector: {},
			tracking: [
				{
					'field': 'name',
					'title': 'Name'
				},
				{
					'field': '_id',
					'title': 'ID'
				}
			],
			hoverable: true,
			onClick: function(ctx) {
				Session.set('selected', ctx._id);
				$('#editSchoolModal').transition('fade down');
			}
		}
	}
})

Template.admin_schools.events({
	'submit #updateSchoolName': function(ev) {
		ev.preventDefault();
		Meteor.call('')
	}
})