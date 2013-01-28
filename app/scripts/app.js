define(function(require) {
  var Router = require('cs!routes/application-router');

  var startRouter = function() {
    var router = new Router();
    router.start();
  };
  return {
    initialize: startRouter
  }
});
