Template.modal.events({
	'click .close.icon, click [data-close=true]': function() {
		$('#' + this.id).transition('fade down');
	}
})