requirejs.config({
  baseUrl: 'scripts',
  paths: {
    app: 'app',
    jquery: 'vendor/jquery.min',
    underscore: '/components/underscore-amd/underscore',
    backbone: '/components/backbone-amd/backbone',
    relational: '/components/backbone-relational/backbone-relational',
    text: '/components/requirejs-text/text',
    domReady: '/components/requirejs-domready/domReady'
  },
  shim: {
    relational: {
      deps: ['backbone']
    }
  }
});

require(['app'], function(app) {
  app.initialize();
  }
);



