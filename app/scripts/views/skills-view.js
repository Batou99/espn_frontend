define(function(require) {
  var Backbone = require('backbone'),
      template = require('text!templates/skills.html');

  var SkillsView = Backbone.View.extend({

    template: _.template(template),

    initialize: function() {
      _.bindAll(this,"render");
      this.model.bind("change", this.render)
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    events: {
      "click .skill-btn": "click"
    },
    click: function(event) {
      var button = $(event.target);
      button.toggleClass("active");
      button.toggleClass("btn-primary");
      button.toggleClass("btn-inverse");
    },

  });
  return SkillsView;
});
