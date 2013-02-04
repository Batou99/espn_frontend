define (require) ->
  Backbone = require 'backbone'
  HeadlinesCollection = require 'cs!collections/headlines'
  HeadlinesView = require 'cs!views/headlines'
  LeaguesCollection = require 'cs!collections/leagues'
  SidebarView = require 'cs!views/sidebar'
    
  class ApplicationRouter extends Backbone.Router
    router:
      '': 'home'

    start: ->
      Backbone.history.start()

    initialize: ->
      _.bindAll(@,'home')
      headlines = new HeadlinesCollection()
      window.headlinesView = new HeadlinesView({model: headlines})

      @leagues = new LeaguesCollection()
      new SidebarView({model: @leagues})

    home: ->

