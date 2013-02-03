define (require) ->
  Backbone = require 'backbone'
  HeadlinesCollection = require 'cs!collections/headlines'
  LeaguesCollection = require 'cs!collections/leagues'
  SidebarView = require 'cs!views/sidebar'
    
  class ApplicationRouter extends Backbone.Router
    router:
      '': 'home'
      '/#nba': 'nba'
      '/#wnba': 'wnba'
      '/#mens-college-basketball': 'mens-college-basketball'
      '/#womens-college-basketball': 'womens-college-basketball'

    start: ->
      Backbone.history.start()

    initialize: ->
      _.bindAll(@,'nba','loadSidebar')
      @headlines = new HeadlinesCollection()
      # Only AJAX call for main content (Until change of section)
      @headlines.fetch({success: @nba})

      @leagues = new LeaguesCollection()
      new SidebarView({model: @leagues})

    nba: ->
      console.log @headlines

    loadSidebar: ->
      console.log @leagues
