define(function(require) {
  var  Backbone = require('backbone');
  var BaseView = Backbone.View.extend({

    initialize: function() {
      _.bindAll(this,"render");
      this.model.bind("change", this.render)
    },

    render: function() {
      this.$el.html(this.template(this.model));
      return this;
    }
  });
  return BaseView;
});
