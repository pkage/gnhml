Template.studentmgr.onRendered(function() {
	$('.ui.checkbox').checkbox('determinate');
	$('#selectSchoolDropdown').dropdown();
	Session.set('selectedSchool', null);
});

Template.studentmgr.helpers({
	'schoolSelectedHelper': function() {
		try {
			Session.set('selectedSchool', Profiles.findOne({account_id: Meteor.userId()}).school_id);
		} catch(e) {};
	},
	'schools': function() {
		if (Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP)) {
			return Schools.find({});
		}
		var prof = Profiles.findOne({account_id: Meteor.userId()});
		if (prof != undefined) {
			return Schools.find(prof.school_id);
		}
	},
	'schoolTeam': function() {
		return Teams.find({school_id: Session.get('selectedSchool')});
	},
	'selectedSchool': function() {
		return Session.get('selectedSchool');
	},
	'year': function() {
		var year = new Date().getFullYear();
		out = [];
		for (var c = 0; c < 8; c++) {
			out.push('' + (year + c));
		}
		return out;
	}
})

Template.studentmgr.events({
	'change #selectSchool, onmouseleave #selectSchool': function(ev) {
		Session.set('selectedSchool', $(ev.target).val());
	},
	'change #selectTeamToggle': function() {
		if ($('#selectTeamToggle').prop('checked')) {
			$('#teamSelect').prop('disabled', false);
		} else {
			$('#teamSelect').prop('disabled', true).val('none');
		}
	},
	'submit #addStudent': function(ev) {
		ev.preventDefault();
		var data = $('#addStudent').serializeArray().reduce(function(obj, item) {
			obj[item.name] = item.value;
			return obj;
		}, {}); // reduce to key-value pairs
		
		// validation
		var keys = _.keys(data);
		for (var c = 0; c < keys.length; c++) {
			if (keys[c] != 'team' && data[keys[c]] == '') {
				sAlert.error('Missing ' + keys[c] + '!');
				return;
			}
		}

		// insert student
		Meteor.call('addStudent', data, function(err, ret) {
			if (err != undefined) {
				sAlert.error('The server bounced the request!');
				return;
			}
			$('input:not(#selectSchool), select').val('');
			$('#selectTeamToggle').prop('checked', false).trigger('change');
			sAlert.success('Added student!');
		})
	}
})