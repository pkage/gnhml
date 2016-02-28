Template.studentselect.onRendered(function() {
    /*$('.ui.dropdown').dropdown({
    	'action': 'hide',
    	'onChange': function() {
    		// create an array of all matching selects
			var selects = $('[data-type="student"]').toArray();

			// turn those objects into selects into value
			selects = _.map(selects, function(el) {
				return $(el).val()
			});


			Session.set('disabledStudents', selects);
		}
	});*/
Session.set('disabledStudents', []);
});

Template.studentselect.helpers({
	'currentProfile': function() {
		return Profiles.findOne({account_id: Meteor.userId()});
	},
	'student': function(){
		return Profiles.find({team_id: this.team_id});
	},
	'disabledStudent': function() {
		return _.contains(Session.get('disabledStudents'), this._id) ? 'disabled' : '';
	}
})

Template.studentselect.events({
	'change [data-type="student"]': function() {
		console.log('changed');
		// create an array of all matching selects
		var selects = $('[data-type="student"]').toArray();

		// turn those objects into selects into value
		selects = _.map(selects, function(el) {
			return $(el).val()
		});


		Session.set('disabledStudents', selects);
	}
})