Template.team.onRendered(function() {
    Session.set('view-season', null);
});

Template.team.helpers({
    'currentProfile': function() {
        var user = Profiles.findOne({account_id: Meteor.userId()});
        Session.set('current-team-id', user.team_id);
        return user;
    },
    'team_name': function(){
        return Teams.findOne(this.team_id).name;
    }
});