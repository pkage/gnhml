Template.seasonselect.onRendered(function() {
    $('.ui.dropdown').dropdown();
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