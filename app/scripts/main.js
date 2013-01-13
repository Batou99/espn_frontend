window.cvApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
    var router = new cvApp.Routers.ApplicationRouter();
  }
};

$(document).ready(function(){
  cvApp.init();
});
