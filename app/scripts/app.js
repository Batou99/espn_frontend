define(function(require) {
  var Router = require('cs!routes/application-router');
  $.ajaxSetup({
    beforeSend: function(xhr, settings) {
      settings.url = "http://localhost:9292/v1/sports/basketball" + settings.url
    },
    type: "GET",
    dataType: "json",
    contentType: "application/json"
  })

  var startRouter = function() {
    var router = new Router();
    router.start();
  };
  return {
    initialize: startRouter
  }
});
