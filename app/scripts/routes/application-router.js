cvApp.Routers.ApplicationRouter = Backbone.Router.extend({
  router: {
    '': 'home'
  },

  initialize: function() {
    var cv= new cvApp.Models.CvModel({_id: 1});
    cv.on('change', this.loadCv);
    cv.fetch();
  },
  loadCv: function(model,options) {
    model.fetchRelated('person');
    var headerView = new cvApp.Views.HeaderView({model: model.get('person')});
    $('#header').html(headerView.render().el);
  },

  home: function() {
     
  }

});
