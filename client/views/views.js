Template.views.onRendered(function() {
	Session.set('view-index', 0);
	// Session.set('label-left', "");
	// Session.set('label-right', "");
	$('.ui.button').mouseup(function(){
    	$(this).blur();
    })
})

Template.views.helpers({
	'chooseTemplate': function(){
		switch(Session.get('view-index')){
			case 0:
				setLabels('Personal', 'Team');
				return 'season';
				break;
			case 1: 
				setLabels('Season', 'Personal');
				return 'team';
				break;
			case 2:
				setLabels('Team', 'Season');
				return 'personal';
				break;
		}
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
		changeIndex(-1);
	},
	'click .right.button': function() {
		changeIndex(1);
	}
})

changeIndex = function(num) {
	var a = Session.get('view-index');
	a += num;
	
	if (a < 0) {
		a = 2;
	}
	else if (a > 2){
		a = 0;
	}

	Session.set('view-index', a);
}

setLabels = function(left, right){
	console.log("hi");
	Session.set('label-left', left);
	Session.set('label-right', right);
}