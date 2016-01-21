Template.table.rendered = function() {
	Session.set('tableSort', {});
	$('.tableheader').children('.icon').hide();

}

Template.table.helpers({
	'context': function() {
		return this.context;
	},
	'search': function() {
		return this.db.find(this.selector, {sort: Session.get('tableSort')})
	},
	'fields': function() {
		// get a pointer to our template instance
		var tmpl = Template.instance();
		// create our output
		var out = []
		// order-dependent pairing - sets us up for the final display
		for (var i = 0; i < tmpl.data.context.tracking.length; i++) {
			// fill our list
			out.push({
				key: tmpl.data.context.tracking[i].field,
				value: this[tmpl.data.context.tracking[i].field]
			})
		}
		return out;
	},
	'hoverableClass': function() {
		console.log(Template.instance().data.context.hoverable);
		return (Template.instance().data.context.hoverable) ? 'tablehoverable' : ''; 
	}
});

Template.table.events({
	'click .tableheader': function(ev) {
		$('.tableheader').children('.icon').hide();
		var key = $(ev.target).data('key');
		var sort = Session.get('tableSort');

		// toggle up/down/disable
		if (key in sort) {
			if (sort[key] == 1) {
				sort[key] = -1;
				$(ev.target).children('.down').show();
			} else {
				sort = {};
			}
		} else {
			sort = {};
			sort[key] = 1;
			$(ev.target).children('.up').show();
		}
		console.log(Session.get('tableSort'), sort);
		Session.set('tableSort', sort);
	},
	'click .tablerow': function(ev, tm) {
		var tmpl = Template.instance();
		if (tmpl.data.context.onClick) {
			tmpl.data.context.onClick(this, ev, tm);
		}
	}
});