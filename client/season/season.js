Template.season.onRendered(function() {
    Session.set('view-season', Seasons.find().fetch()[0]._id);
    Session.set('current-team-id', "none");
    Session.set('selected-menu-item', "");
});

Template.season.helpers({
    'chooseTemplate': function() {
        if (Session.get('selected-menu-item') == "Individuals"){
            return 'studenttable';
        }
        else {
            return 'teamtable';
        } 
    }
});

Template.season.events({
    'click .ui.menu.item': function(ev){
        $('.active.item').removeClass('active');
        $(ev.target).addClass('active');
        
        Session.set('selected-menu-item', ev.target.text);
    }
});
