define(['backbone','views/header-view','models/cv-model'], function (Backbone,HeaderView,CvModel) {
    
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
      var headerView = new HeaderView({model: model.get('person')});
      $('#header').html(headerView.render().el);
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
