Template.seasonselect.onRendered(function() {
	$('.ui.dropdown').dropdown();
	Session.set('view-season', Seasons.find().fetch()[0]._id);
});

Template.seasonselect.events({
    'change #season-select': function(evt) {
        Session.set('view-season', $(evt.target).val());
    }
});

Template.seasonselect.helpers({
	'season': function() {
        return Seasons.find({});
    },
});