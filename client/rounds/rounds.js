Template.rounds.onRendered(function(){
	var tempArr = SelectedRounds.find({}).fetch();
	if (tempArr != null) {
		for (var i = 0; i < tempArr.length; i++){
			var cell = $('#rounds-table tr').eq(tempArr[i].row).find('td').eq(tempArr[i].col)[0];
			cell.classList.remove('toggle-inactive');
			cell.classList.add('toggle-active');
		}
	}
})

Template.rounds.events({
	'click .toggle': function(ev) {
		var col = getCol(ev.target);
  		var row = getRow(ev.target);

  		var tempArr = SelectedRounds.find({}).fetch();

		if ($(ev.target).hasClass('toggle-inactive')){
	  		var numInCol = 0;
	  		var numInRow = 0;
	  		for (var i = 0; i < tempArr.length; i++){
	  			if (tempArr[i].col == col){
	  				numInCol++;
	  			}

	  			if (tempArr[i].row == row){
	  				numInRow++;
	  			}
	  		}
	  		
			if (numInCol < 3 && numInRow < 3){
				ev.target.classList.remove('toggle-inactive');
				ev.target.classList.add('toggle-active');
				
				Meteor.call('addRound', col, row);
			}
		}
		else {
			ev.target.classList.remove('toggle-active');
			ev.target.classList.add('toggle-inactive');
			
			Meteor.call('deleteRound', col, row);
		}
	},
	'click .button': function(ev) {
		var tempArr = SelectedRounds.find({}).fetch();
		for (var i = 0; i < tempArr.length; i++){
			var cell = $('#rounds-table tr').eq(tempArr[i].row).find('td').eq(tempArr[i].col)[0];
			cell.classList.remove('toggle-active');
			cell.classList.add('toggle-inactive');
		}
		Meteor.call('emptyRounds');
	}
})

getCol = function(target) {
	return $(target).parent().children().index($(target));
}

getRow = function(target){
	return $(target).parent().parent().children().index($(target).parent()) + 1;
}