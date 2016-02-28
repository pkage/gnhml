Template.rounds.onRendered({
	// Session.set('selectedRounds', []);
})

Template.rounds.events({
	'click .toggle': function(ev) {
		var col = $(ev.target).parent().children().index($(this));
  		var row = $(ev.target).parent().parent().children().index($(this).parent());
		console.log(col + " " + row)

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