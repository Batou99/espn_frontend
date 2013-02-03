define (require) ->
  Backbone = require 'backbone'
  HeadlineModel = require 'models/headline'
  class HeadlinesCollection extends Backbone.Collection
    model: HeadlineModel

    initialize: (models,options) ->
      options ||= {}
      @page = options.page ||  0
      @leagueName = options.leagueName || 'nba'

    url: -> "/#{@leagueName}/news/#{@page}"
    parse: (data) ->
      @status = data.status
      @resultsCount = data.resultsCount
      @resultsOffset = data.resultsOffset
      @timestamp = data.timestamp
      data.headlines
