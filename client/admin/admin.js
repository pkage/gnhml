Template.admin.rendered = function() {
	Session.set('admin_active', 'admin_schools');
	Meteor.subscribe('users');
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
		Meteor.call('updateSchoolName', Session.get('selected'), $('[name="school_name"]').val())
	},
	'click #add-button': function() {
		$('#add-school-form-modal').transition('fade down');
	},

	'submit #add-school-form': function(ev) {
		ev.preventDefault();
		Meteor.call('addSchool', ev.target.schoolname.value);
		$('#add-school-form-modal').transition('fade down');
	}
})


Template.admin_profiles.helpers({
	'ap_context': function() {
		return {
			db: Profiles,
			selector: {},
			tracking: [
			{field: 'name', title: 'Name'},
			{field: 'email', title: 'Email'},
			{field: '_id', title: 'Profile ID'},
			{field: 'account_id', title: 'Bound Account ID'},
			{
				field: 'school_id',
				title: 'School', 
				func: function(value, ctx) {return Schools.findOne(value).name;}
			},
			{
				field: '',
				title: 'Admin',
				func: function(val, ctx) {
					return Roles.userIsInRole(ctx.account_id, 'admin') ? 'Yes' : 'No'
				}
			},
			{
				field: '',
				title: 'Coach',
				func: function(val, ctx) {
					return Roles.userIsInRole(ctx.account_id, 'coach') ? 'Yes' : 'No'
				}
			}
			],
			hoverable: true,
			onClick: function(ctx) {
				Session.set('admin-profile-edit', ctx._id);
				$('#edit-profile-modal').transition('fade down');
			}
		}
	},
	'modalContext': function() {
		return Profiles.findOne(Session.get('admin-profile-edit'));
	},
	'roleCBDriver': function(rolename) {
		var attrs = {
			'type': 'checkbox',
			'class': 'roleCB'
		}
		if (rolename) {
			attrs['data-role'] = rolename
			if (Roles.userIsInRole(this.account_id, rolename)) {
				attrs.checked = ''
			}
		}

		return attrs
	},
	'school': function() {
		return Schools.find();
	}
});

Template.admin_profiles.events({
	'click .roleCB-container': function(ev) {
		Meteor.call('assignRole', this._id, $(ev.target).data('role'), function(err, ret) {
			if (err !== undefined) {
				sAlert.error(error.reason ? error.reason : error.error);
				return;
			}
			if (ret == 'pending') {
				sAlert.warning('no bound account, role will be set on next login');
			}

		});
	},
	'dblclick .delete.button': function() {
		sAlert.error('not yet implemented');
	},
	'click #open-add-profile-modal': function() {
		$('#add-new-profile-modal').transition('fade down');
	},
	'submit #add-new-profile-form': function(ev) {
		ev.preventDefault();
		var data = $('#add-new-profile-form').serializeArray().reduce(function(obj, item) {
			obj[item.name] = item.value;
			return obj;
		}, {}); // reduce to key-value pairs

		// insert student
		Meteor.call('addStudent', data, function(err, ret) {
			if (err != undefined) {
				sAlert.error('The server bounced the request!');
				return;
			}
			$('input, select').val('');
			sAlert.success('Added profile!');
		})
	}
})

Template.admin_teams.helpers({
	'at_context': function() {
		return {
			db: Teams,
			selector: {},
			tracking: [
			{
				field: 'name',
				title: 'Name'
			},
			{
				field: 'level',
				title: 'Level'
			},
			{
				field: 'school_id',
				title: 'School',
				func: function(value, ctx) {return Schools.findOne(value).name;}
			},
			{
				field: '',
				title: 'student_count',
				func: function(val, ctx) {return Profiles.find({team_id: ctx._id}).count();}
			}
			]
		}
	}
})
