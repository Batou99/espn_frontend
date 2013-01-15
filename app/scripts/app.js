define(function(require) {
  var Router = require('routes/application-router');

  var startRouter = function() {
    Router.initialize()
  };
  return {
    initialize: startRouter
  }
});
