define (require) ->
  Backbone = require 'backbone'
  HeadlineModel = require 'models/headline'
  class HeadlinesCollection extends Backbone.Collection
    model: HeadlineModel

    initialize: (models,options) ->
      options ||= {}
      @_id = options._id ||  1
      @leagueName = options.leagueName || 'nba'
      # Only AJAX call for main content (Until change of section)
      @fetch()

    url: -> "/#{@leagueName}/teams/#{@_id}/news"
