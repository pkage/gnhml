Template.views.onRendered(function() {
	Session.set('view-index', 0);
})

Template.views.helpers({
	'chooseTemplate': function(){
		switch(Session.get('view-index')){
			case 0:
				return 'season';
				break;
			case 1: 
				return 'team';
				break;
			case 2:
				return 'individual';
				break;
		}
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
