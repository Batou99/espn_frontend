define (require) ->
  Backbone = require 'backbone'
  template = require 'text!templates/team.html'

  class TeamView extends Backbone.View
    template: _.template(template)
    tagName: 'li'

    initialize: ->
      _.bindAll(@,"render")

    render: ->
      console.log 'render l'
      @$el.html(@template(@model.toJSON()))
      @el
