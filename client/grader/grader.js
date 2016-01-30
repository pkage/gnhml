Template.grader.onRendered(function() {
	Session.set('gradersearch', '')
	Session.set('graderscore', 0);
})

Template.grader.helpers({
	'students': function() {
		var search = Session.get('gradersearch');
		if (search == '') {
			return Profiles.find({}, {$sort: {name: 1}});
		} else {
			return Profiles.find({name: {$regex: '(' + search + ')\\w+', $options: 'i'}}, {$sort: {name: 1}});
		}
	},
	'school': function() {
		try {
			return Schools.findOne(this.school_id).name;
		} catch (e) {
			// ignore errors from this
		}
	},
	'score': function() {
		return Session.get('graderscore');
	}
})

Template.grader.events({
	'keyup #search': function() {
		var query = $('#search').val();
		Session.set('gradersearch', query)
	},
	'click [data-type="grade"]': function(ev) {
		if ($(ev.target).hasClass('blockactive')) {
			Session.set('graderscore', Session.get('graderscore') - $(ev.target).data('value'));
			$(ev.target).removeClass('blockactive');
		} else {
			Session.set('graderscore', Session.get('graderscore') + $(ev.target).data('value'));
			$(ev.target).addClass('blockactive');
		}
	},
	'click [data-type="round"]': function(ev) {
		var hc = $(ev.target).hasClass('blockactive');
		$('[data-type="round"]').removeClass('blockactive');
		if (!hc) {
			$(ev.target).addClass('blockactive');
		}
		if ($('[data-type="student"].blockactive').length > 0 && $('[data-type="round"].blockactive').length > 0) {
			if ($('.grade').hasClass('hidden')) {
				$('.grade').transition('fade down in');
			}
		} else {
			if (!$('.grade').hasClass('hidden')) {
				$('.grade').transition('fade down out');
			}
		}
	},
	'click [data-type="student"]': function(ev) {
		var hc = $(ev.target).hasClass('blockactive');
		$('[data-type="student"]').removeClass('blockactive');
		if (!hc) {
			$(ev.target).addClass('blockactive');
		}

		if ($('[data-type="student"].blockactive').length > 0 && $('[data-type="round"].blockactive').length > 0) {
			if ($('.grade').hasClass('hidden')) {
				$('.grade').transition('fade down in');
			}
		} else {
			if (!$('.grade').hasClass('hidden')) {
				$('.grade').transition('fade down out');
			}
		}
		

	},
	'click .submit': function() {

	}
})