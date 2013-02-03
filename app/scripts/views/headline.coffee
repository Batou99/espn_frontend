define (require) ->
  Backbone = require 'backbone'
  template = require 'text!templates/headline.html'

  class HeadlineView extends Backbone.View
    template: _.template(template)
    className: 'row-fluid'

    initialize: ->
      _.bindAll(@,"render")

    render: ->
      @$el.html(@template(@model.toJSON()))
      @el
