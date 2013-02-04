define (require) ->
  Backbone = require 'backbone'
  template = require 'text!templates/team.html'
  HeadlinesCollection = require 'cs!collections/headlines'
  HeadlinesView= require 'cs!views/headlines'

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
      $('li').removeClass('active')
      @$el.addClass('active')
      $('.brand').text(@model.fullname())
      headlines = new HeadlinesCollection([],{_id: @model.get('id'), leagueName: @model.collection.league})
      window.headlinesView = new HeadlinesView({model: headlines})
