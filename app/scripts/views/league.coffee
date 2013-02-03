define (require) ->
  Backbone = require 'backbone'
  template = require 'text!templates/league.html'
  TeamView = require 'views/team'

  class LeagueView extends Backbone.View
    template: _.template(template)
    tagName: 'li'
    className: 'nav-header'

    initialize: ->
      _.bindAll(@,"render")

    render: ->
      @$el.html(@template(@model.toJSON()))
      _.each @model.teams.models, @add_team, @
      @el

    add_team: (team) ->  
      tv = new TeamView({model: team})
      @$el.append(tv.render())

