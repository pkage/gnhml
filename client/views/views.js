Template.views.onRendered(function() {
	Session.set('view-index', 0);
	Session.get('viewable-pages', []);
	Session.set('view-season', Seasons.find().fetch()[0]._id);
	console.log(Session.get('view-season'));
	// Session.set('label-left', "");
	// Session.set('label-right', "");
	$('.ui.button').mouseup(function(){
    	$(this).blur();
    })
})

Template.views.helpers({
	'coachTemplates': function(){
		Session.set('viewable-pages', ['Season', 'Headup', 'Team']);
		return chooseTemplates();
	},
	'studentTemplates': function(){
		Session.set('viewable-pages', ['Season', 'Headup', 'Personal']);
		return chooseTemplates();
	},
	'generalTemplates': function(){
		Session.set('viewable-pages', ['Season', 'Headup']);
		return chooseTemplates();
	},
	'labelLeft': function(){
		return Session.get('label-left');
	},
	'labelRight': function(){
		return Session.get('label-right');
	}
})

Template.views.events({
	'click .left.button': function() {
		Session.set('view-index', changeIndex(-1));
	},
	'click .right.button': function() {
		Session.set('view-index', changeIndex(1));
	}
})

changeIndex = function(num) {
	var i = Session.get('view-index');
	i += num;

	var len = Session.get('viewable-pages').length;
	if (i < 0) {
		i = len - 1;
	}
	else if (i >= len){
		i = 0;
	}

	return i;
}

setLabels = function(){
	Session.set('label-left', Session.get('viewable-pages')[changeIndex(-1)]);
	Session.set('label-right', Session.get('viewable-pages')[changeIndex(1)]);
}

chooseTemplates = function(){
	setLabels();
	return Session.get('viewable-pages')[Session.get('view-index')].toLowerCase();
}