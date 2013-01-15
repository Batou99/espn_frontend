define(['routes/application-router'], function(Router) {

  var startRouter = function() {
    Router.initialize()
  };
  return {
    initialize: startRouter
  }
});
