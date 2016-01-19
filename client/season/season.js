// yes i stole the array structure from philip
// but in my defense i was supposed to imitate him
var seasonArray = {
	teams: [{
        team_name: 'Choate',
        scores: [{
            competition_date: "9-18-2015",
            score: Math.floor(Math.random() * 10)
        }, {
        	competition_date: "10-24-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "12-19-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "1-16-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "3-31-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "4-4-2016",
            score: Math.floor(Math.random() * 10)
        }]
    }, {
        team_name: 'Exeter',
        scores: [{
            competition_date: "9-18-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "10-24-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "12-19-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "1-16-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "3-31-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "4-4-2016",
            score: Math.floor(Math.random() * 10)
        }]
    }, {
        team_name: 'Rosemary',
        scores: [{
            competition_date: "9-18-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "10-24-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "12-19-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "1-16-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "3-31-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "4-4-2016",
            score: Math.floor(Math.random() * 10)
        }]
    }, {
        team_name: 'Andover',
        scores: [{
            competition_date: "9-18-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "10-24-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "12-19-2015",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "1-16-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "3-31-2016",
            score: Math.floor(Math.random() * 10)
        }, {
            competition_date: "4-4-2016",
            score: Math.floor(Math.random() * 10)
        }]
    }]
}

// WHY WON'T THIS WORK?????
// Template.season.onRendered(function() {
// 	this.autorun(function(){
// 		for (var n = 0; n < seasonArray.teams[0].scores.length; n++){
// 			this.fields.set(this.fields.get().unshift({
// 				fieldId: 'competition' + n,
// 				key: 'scores',
// 				label: function() {
// 					return seasonArray.teams[0].scores[0].competition_date;
// 				},
// 				fn: function(value, object) {
// 					return value[0].score;
// 				}
// 			});
// 		}
// 	});
// })

Template.season.helpers({
	'seasonCollection': function(){
		console.log(seasonArray);
		return seasonArray.teams;
	},

	'seasonSettings': function(){
		return {
			fields: [{
				fieldId:'team_name',
				key: 'team_name',
				label: 'Teams'
			}, {
			// HOW TO ITERATE THROUGH?????
				fieldId: 'competitions0',
				key: 'scores',
				label: function() {
					return seasonArray.teams[0].scores[0].competition_date;
				},
				fn: function(value, object) {
					return value[0].score;
				}
			}, {
				fieldId: 'competitions1',
				key: 'scores',
				label: function() {
					return seasonArray.teams[0].scores[1].competition_date;
				},
				fn: function(value, object) {
					return value[1].score;
				}
			}, {
				fieldId: 'competitions2',
				key: 'scores',
				label: function() {
					return seasonArray.teams[0].scores[2].competition_date;
				},
				fn: function(value, object) {
					return value[2].score;
				}
			}, {
				fieldId: 'competitions3',
				key: 'scores',
				label: function() {
					return seasonArray.teams[0].scores[3].competition_date;
				},
				fn: function(value, object) {
					return value[3].score;
				}
			}, {
				fieldId: 'competitions4',
				key: 'scores',
				label: function() {
					return seasonArray.teams[0].scores[4].competition_date;
				},
				fn: function(value, object) {
					return value[4].score;
				}
			}, {
				fieldId: 'competitions5',
				key: 'scores',
				label: function() {
					return seasonArray.teams[0].scores[5].competition_date;
				},
				fn: function(value, object) {
					return value[5].score;
				}
			}, {
				fieldId: 'total',
				key: 'scores',
				label: 'Total Score',
				fn: function(value, object) {
					var total_score = 0;
					for (var n = 0; n < seasonArray.teams[0].scores.length; n++){
						total_score += value[n].score;
					}
					return total_score;
				}
			}]
		}
	}
})