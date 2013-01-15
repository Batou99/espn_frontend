define(function(require) {
  var Backbone = require('backbone'),
      template = require('text!templates/person.html'),
   personModel = require('models/person-model');
                 require('backbone-relational');


  var PersonView = Backbone.View.extend({

    className: 'jumbotron',
    template: _.template(template),

    initialize: function() {
      _.bindAll(this,'render');
      this.model.on('change',this.render); 
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return PersonView;
});
