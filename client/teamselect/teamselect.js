Template.teamselect.onRendered(function() {
	Session.set('teamselectsearch', '');
	Session.set('teamselectlist', []);
	Session.setDefault('userProfile', {});
})

Template.teamselect.events({
	'keyup #search': function(ev) {
		Session.set('teamselectsearch', $(ev.target).val());
	},
	'click [data-type="student"].listblock': function(ev) {
		var clist = Session.get('teamselectlist');
		if (clist.indexOf(this._id) < 0) {
			clist.push(this._id);
			Session.set('teamselectlist', clist);
		} else {
			$(ev.target).transition('pulse');
			$('[data-type="teammember"][data-value="' + this._id + '"]').transition('pulse');
		}
	},
	'click [data-type="teammember"].listblock': function(ev) {
		var clist = Session.get('teamselectlist');
		clist = _.without(clist, this._id);
		Session.set('teamselectlist', clist);
	}
})

Template.teamselect.helpers({
	'students': function() {
		var search = Session.get('teamselectsearch');
		var exclude = (Session.get('teamselectlist') == undefined) ? [] : Session.get('teamselectlist');
		if (search == '') {
			return Profiles.find({
				school_id: Session.get('userProfile').school_id,
				_id: {$nin: exclude}
			}, {sort: {name: 1}});
		} else {
			return Profiles.find({
				name: {$regex: '(' + search + ')', $options: 'i'},
				_id: {$nin: exclude},
				school_id: Session.get('userProfile').school_id
			}, {sort: {name: 1}});
		}
	},
	'school': function() {
		try {
			return Schools.findOne(this.school_id).name;
		} catch (e) {
			// ignore errors from this
		}
	},
	'schoolmenu': function() {
		Meteor.setTimeout(function() {
			$('.dropdown').dropdown();
		}, 200)
		return Schools.find({});
	},
	'team': function() {
		return Session.get('teamselectlist');
	},
	'resolveStudent': function() {
		var _id = String(this);
		return Profiles.findOne(_id);
	},
	'resolveTeam': function() {
		return Teams.findOne(this.team_id);
	}
})