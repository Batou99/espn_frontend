define (require) ->
  Backbone = require 'backbone'
  HeadlinesCollection = require 'collections/headlines'
    
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

      _.bindAll(@,'nba')
      @headlines = new HeadlinesCollection()
      @headlines.fetch({success: @nba})

    nba: ->
      console.log @headlines
