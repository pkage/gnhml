Template.studentselect.onRendered(function() {
    $('.ui.dropdown').dropdown({
    	'onChange': function() {
    		// create an array of all matching selects
			var selects = $('[data-type="student"]').toArray();
			
    		for (var i = 0; i < selects.length; i++){
    			selects[i] = selects[i].value;
    		}

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
	    var attrs = {value: this._id};
	    if (_.contains(Session.get('disabledStudents'), this._id)) {
	        attrs.disabled = "disabled"
	        $('.item[data-value="' + this._id + '"]').addClass('disabled');
	    } else {
	        $('.item[data-value="' + this._id + '"]').removeClass('disabled');
	    }
	    return attrs;
	}
})