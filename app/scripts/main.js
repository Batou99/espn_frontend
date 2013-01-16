requirejs.config({
  baseUrl: 'scripts',
  shim: {
    'backbone-relational': {
      deps: ['backbone']
    }
  },
  paths: {
    app: 'app',
    jquery: 'vendor/jquery.min',
    underscore: '/components/underscore-amd/underscore',
    backbone: '/components/backbone-amd/backbone',
    'backbone-relational': '/components/backbone-relational/backbone-relational',
    text: '/components/requirejs-text/text'
  }

});

require(['app'], function(app) {
  app.initialize();
  }
);



