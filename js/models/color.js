var clr = clr || {};

(function() {
	'use strict';

	clr.Todo = Backbone.Model.extend({
		defaults: {
			colorValue: '',
			out: false
		}
	});
})();