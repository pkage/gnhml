Template.competitionselect.onRendered(function() {
    $('.ui.dropdown').dropdown();
    Session.set('view-competition', Competitions.find().fetch()[0]._id);
});

Template.competitionselect.events({
    'change #competition-select': function(evt) {
        Session.set('view-competition', $(evt.target).val());
    }
});

Template.competitionselect.helpers({
	'competition': function() {
        return Competitions.find({});
    },
    'date': function() {
    	return this.date.toDateString();
    }
});