var clr = clr || {};

(function() {
	'use strict';

	clr.DomView = Backbone.View.extend({
		el: 'body',

		template: _.template($('#dom-count').html()),

		events: {
			'keypress .v-clr': 'createOnEnter',
			'click .cbtn': 'addOne'
		},

		initialize: function() {
			this.$input = this.$('.v-clr');
			this.$dom = this.$('.display');
			this.$footer = this.$('.footer');
		},

		render: function() {
			var completed = clr.todos.completed().length;

			this.$footer.html(this.template({
				completed: completed
			}));
		},

		createOnEnter: function(e) {
			if(e.which === 13 && this.$input.val().trim()) {
				this.addOne();
			} 
		},

		addOne: function() {
			var cv = this.$input.val().trim();

			if(!cv) return;

			var todo = new clr.Todo({colorValue: cv, out: true});
			clr.todos.add( todo );
			
			var ccl = todo.get("colorValue");
			this.$dom.append('<div class="area" style="background-color:' +  ccl + ';box-shadow:0 1px 1px ' + ccl + ',0 8px 0 -3px ' + ccl + ',0 9px 1px -3px ' + ccl + ',0 16px 0 -6px ' + ccl + ',0 17px 2px -6px ' + ccl + '"></div>');

			if( cv.indexOf('#') > -1 ) {
				this.$input.val('#').focus();
			} else {
				this.$input.val('').focus();
			}

			this.render();
		}
	});

	new clr.DomView();
})(jQuery);