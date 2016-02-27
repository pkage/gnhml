Template.studentselect.onRendered(function() {
    $('.ui.dropdown').dropdown();
});

Template.studentselect.helpers({
	'currentProfile': function() {
        return Profiles.findOne({account_id: Meteor.userId()});
        console.log(Profiles.findOne({account_id: Meteor.userId()}));
    },
    'student': function(){
    	return Profiles.find({team_id: this.team_id});
    }
})