Template.table.rendered = function() {
	Session.set('tableSort', {key: null, direction: null});
	$('.tableheader').children('.icon').hide();

}

Template.table.helpers({
	'context': function() {
		return this.context;
	},
	'getTitle': function() {
		if ('titlefunc' in this) {
			return this.titlefunc();
		}
		return this.title;
	},
	'search': function() {
		var vals = this.db.find(this.selector).fetch();

		var tmpl = Template.instance();


		// replace all the function specified values with their post-exec counterparts
		// ew this is kinda ugly
		var data = [];
		for (var c = 0; c < vals.length; c++) {
			// create the next object we'll insert
			var next = {};
			for (var i = 0; i < tmpl.data.context.tracking.length; i++) {
				// watch this key now 
				var key = tmpl.data.context.tracking[i].field;

				// execute a custom function if it's got one, otherwise just get the value
				if ('func' in tmpl.data.context.tracking[i]) {
					next[key] = tmpl.data.context.tracking[i].func(vals[c][tmpl.data.context.tracking[i].field], vals[c]);
				} else {
					next[key] = vals[c][tmpl.data.context.tracking[i].field];
				}
			}
			data.push(next);
		}

		var sort = Session.get('tableSort');
		data = _.sortBy(data, sort.key);
		if (sort.direction == -1) {
			data = data.reverse();
		}

		return data;

	},
	'fields': function() {
		// get a pointer to our template instance
		var tmpl = Template.instance();
		// create our output
		var out = []
		// order-dependent pairing - sets us up for the final display
		for (var i = 0; i < tmpl.data.context.tracking.length; i++) {
			// create our next item in the list with a key 
			var next = {key: tmpl.data.context.tracking[i].field, value: this[tmpl.data.context.tracking[i].field]}
			out.push(next);
		}
		return out;
	},
	'hoverableClass': function() {
		return (Template.instance().data.context.hoverable) ? 'tablehoverable' : ''; 
	}
});

Template.table.events({
	'click .tableheader': function(ev) {
		$('.tableheader').children('.icon').hide();
		var key = $(ev.target).data('key');
		var sort = Session.get('tableSort');

		// toggle up/down/disable
		if (sort.key == key) {
			if (sort.direction == 1) {
				sort.direction = -1;
				$(ev.target).children('.down').show();
			} else {
				sort.key = null;
				sort.direction = null;
			}
		} else {
			sort.key = key;
			sort.direction = 1;
			$(ev.target).children('.up').show();
		}
		Session.set('tableSort', sort);
	},
	'click .tablerow': function(ev, tm) {
		var tmpl = Template.instance();
		if (tmpl.data.context.onClick) {
			tmpl.data.context.onClick(this, ev, tm);
		}
	}
});