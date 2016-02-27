Template.rounds.events({
	'click .toggle': function(ev) {
		if ($(ev.target).hasClass('toggle-inactive')){
			ev.target.classList.remove('toggle-inactive');
			ev.target.classList.add('toggle-active');
		}
		else {
			ev.target.classList.remove('toggle-active');
			ev.target.classList.add('toggle-inactive');
		}
	}
})

Template.rounds.helpers({

})