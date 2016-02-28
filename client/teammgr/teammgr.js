Template.teammgr.onRendered(function() {
	Session.setDefault('currentSchool', null);
	Session.set('dragulaEnabled', false);
	this.drake = new ReactiveVar();

	this.drake.set(dragula({
		isContainer: function(el) {
			return el.classList.contains('dragcontainer');
		},
		accepts: function(el, target, source, sibling) {
			if ($(target).data('id') == "none") {
				return true;
			}
			if (Profiles.find({team_id: $(target).data('id')}).count() >= 5) {
				$(target).addClass('disabled');
				return false;
			}
			return true;
		},
		moves: function(el, source, handle, sibling) {
			return !el.classList.contains('emptyinfo');
		}
	}));

	this.drake.get().on('drop', function(el, target, source, sibling) {
		console.log($(el).data('id'), $(target).data('id'));
		$(target).removeClass('disabled');
		Meteor.call('assignToTeam', $(el).data('id'), $(target).data('id'));
	});

	this.drake.get().on('out', function(el, container, source) {
		$('.dragcontainer').removeClass('disabled');
	});

	$('.ui.dropdown').dropdown();

});

Template.teammgr.helpers({
	'schoolHelper': function() {

		try {
			Session.set('currentSchool', Profiles.findOne({account_id: Meteor.userId()}).school_id);
		} catch(e) {}; // not loaded yet
	},
	'unassignedStudent': function() {
		return Profiles.find({school_id: Session.get('currentSchool'), team_id: null});
	},
	'team': function() {
		return Teams.find({school_id: Session.get('currentSchool')});
	},
	'hasStudents': function() {
		return Profiles.find({team_id: this._id}).count() > 0;
	},
	'hasUnassignedStudents': function() {
		return Profiles.find({school_id: Session.get('currentSchool'), team_id: null}).count() > 0;
	},
	'teamStudent': function() {
		return Profiles.find({team_id: this._id});
	},
	'resolveSchool': function() {
		return Schools.findOne(this.school_id);
	}
});

Template.teammgr.events({
	'click .editbutton': function() {
		$('#editTeamListModal').transition('fade down');
	},
	'click .deletebutton': function() {
		Meteor.call('deleteTeam', this._id, function(err) {
			if (err != undefined) {
				sAlert.error(err);
			}
		});
	},
	'submit #addTeamForm': function(ev) {
		ev.preventDefault();
		if ($('#teamlevel').val() == "") {
			sAlert.error('Team level required');
			return;
		}
		Meteor.call('createTeam', Profiles.findOne({account_id: Meteor.userId()}).school_id, $('#teamname').val(), $('#teamlevel').val(), function(err) {
			if (err == undefined) {
				$('#teamname').val('');
				$('.dropdown').dropdown('clear');
			} else {
				console.log(err);
			}
		});
	},
	'mouseleave .dragcontainer': function(ev, tm) {
		$('[data-id=' + this._id + ']').removeClass('disabled');
	}
})