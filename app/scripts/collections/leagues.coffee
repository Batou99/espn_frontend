define (require) ->
  Backbone = require 'backbone'
  LeagueModel = require 'cs!models/league'

  class LeaguesCollection extends Backbone.Collection

    model: LeagueModel

    url: '/leagues_and_teams'
