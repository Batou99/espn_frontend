define (require) ->
  Backbone = require 'backbone'
  HeadlineView = require 'cs!views/headline'

  class HeadlinesView extends Backbone.View

    initialize: ->
      _.bindAll(@,"render")
      # Render sidebar when we have data
      @model.bind('reset',@render)
      # Only AJAX call for sidebar
      @model.fetch()

    render: ->
      console.log 'rendering headlines',@model
      $('#headlines').empty()
      _(@model.models).each (headline) ->
        hv = new HeadlineView({model: headline})
        $('#headlines').append(hv.render())
