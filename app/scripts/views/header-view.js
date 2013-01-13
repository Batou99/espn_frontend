cvApp.Views.HeaderView = Backbone.View.extend({

  className: 'masthead',

  template: new EJS({url: 'scripts/templates/header.ejs'}),

  initialize: function() {
    _.bindAll(this,"render");
    this.model.bind("change", this.render)
    //this.model.fetchRelated('person');
    //this.model.get('person').bind("change", this.render)
  },

  render: function() {
    this.$el.html(this.template.render(this.model.attributes));
    return this;
  }
});
