Template.studentselect.onRendered(function() {
    $('.ui.dropdown').dropdown({
    	'onChange': function() {
    		// create an array of all matching selects
			var selects = $('[data-type="student"]').toArray();
			
    		for (var i = 0; i < selects.length; i++){
    			selects[i] = selects[i].value;
    		}

    		console.log(selects);

			Session.set('disabledStudents', selects);
		}
	});
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
		console.log(this._id + " " +  _.contains(Session.get('disabledStudents'), this._id) ? 'disabled' : '')
		return _.contains(Session.get('disabledStudents'), this._id) ? 'disabled' : '';
	}
})