define (require) ->
  Backbone = require 'backbone'
  TeamsCollection = require 'cs!collections/teams'
  class LeagueModel extends Backbone.Model

    initialize: ->
      @on("change",@load,@)

    parse: (data) ->
      @teams = new TeamsCollection(data.teams,{league: data.abbr})
      data

