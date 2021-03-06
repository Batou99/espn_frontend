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
    relational: '/components/backbone-relational/backbone-relational',
    text: '/components/requirejs-text/text',
    domReady: '/components/requirejs-domready/domReady',
    cs: '/components/require-cs/cs',
    "coffee-script": '/components/require-cs/coffee-script'
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



