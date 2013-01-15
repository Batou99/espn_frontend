define(['backbone','underscore','text!templates/header.html','models/cv-model'], function (Backbone,_,template,cvModel) {
  var HeaderView = Backbone.View.extend({

    className: 'masthead',
    template: _.template(template),

    initialize: function() {
      _.bindAll(this,"render");
      this.model.bind("change", this.render)
      //this.model.fetchRelated('person');
      //this.model.get('person').bind("change", this.render)
      //this.template = _.template( template, {model: JSON.stringify(this.model.attributes)});
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return HeaderView;
});
