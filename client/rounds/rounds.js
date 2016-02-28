Template.rounds.onRendered(function(){
	Session.set('selectedRounds', []);
})

Template.rounds.events({
	'click .toggle': function(ev) {
		var col = getCol(ev.target);
  		var row = getRow(ev.target);

  		var tempArr = Session.get('selectedRounds');

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
				
				tempArr.push({
					col: col,
					row: row
				});
			}
		}
		else {
			ev.target.classList.remove('toggle-active');
			ev.target.classList.add('toggle-inactive');
			
			var index;
			for (var i = 0; i < tempArr.length; i++){
				if (tempArr[i].col == col && tempArr[i].row == row) {
					index = i;
				}
			}

			tempArr.splice(index, 1);
		}

		Session.set('selectedRounds', tempArr);
	}
})

getCol = function(target) {
	return $(target).parent().children().index($(target))- 1;
}

getRow = function(target){
	return $(target).parent().parent().children().index($(target).parent());
}