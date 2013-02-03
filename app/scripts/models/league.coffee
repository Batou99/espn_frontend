define (require) ->
  Backbone = require 'backbone'
  TeamsCollection = require 'cs!collections/teams'
  class LeagueModel extends Backbone.Model

    parse: (data) ->
      @teams = new TeamsCollection(data.teams)
      data
      
