define (require) ->
  Backbone = require 'backbone'
  template = require 'text!templates/team.html'

  class TeamView extends Backbone.View
    template: _.template(template)
    tagName: 'li'
    className: 'active'
    events: 'click .team': 'selectTeam'

    initialize: ->
      _.bindAll(@,"render")

    render: ->
      @$el.html(@template(@model.toJSON()))
      @el

    selectTeam: (event) ->
      console.log event.target
      $('li').removeClass('active')
      @$el.addClass('active')
      $('.brand').text(@model.fullname())
      console.log 'fn',@model.fullname()
