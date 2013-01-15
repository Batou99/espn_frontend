define(function(require) {
  var  Backbone = require('backbone'),
        cvModel = require('models/cv-model'),
       template = require('text!templates/header.html');
                  require('backbone-relational');
  var HeaderView = Backbone.View.extend({

    className: 'masthead',
    template: _.template(template),

    initialize: function() {
      _.bindAll(this,"render");
      this.model.bind("change", this.render)
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return HeaderView;
});
