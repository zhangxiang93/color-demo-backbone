var clr = clr || {};

(function() {
	'use strict';

	var Todos = Backbone.Collection.extend({
		model: clr.Todo,

		completed: function() {
			return this.where({out: true});
		}
	});

	clr.todos = new Todos();
})();