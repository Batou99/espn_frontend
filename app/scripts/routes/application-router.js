define(function(require) {
  var Backbone = require('backbone'),
      HeaderView = require('views/header-view'),
      PersonView = require('views/person-view'),
      CvModel = require('models/cv-model'),
      PersonModel = require('models/person-model');
    
  var ApplicationRouter = Backbone.Router.extend({
    router: {
      '': 'home'
    },
    start: function() {
      Backbone.history.start();
    },

    initialize: function() {
      var cv= new CvModel({_id: 1});
      cv.on('change', this.loadCv);
      cv.fetch();
    },
    loadCv: function(model,options) {
      model.fetchRelated('person');
      var headerView = new HeaderView({model: model});
      var personView = new PersonView({model: model.get('person')});
      $('#header').html(headerView.render().el);
      $('#header').append(personView.render().el);
      console.log(model);
    },

    home: function() {

    }

  });
  
  var initialize = function() {
    var router = new ApplicationRouter();
    router.start();
  };
  return {
    initialize: initialize
  }
});
