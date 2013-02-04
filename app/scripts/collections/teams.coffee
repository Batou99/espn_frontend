define (require) ->
  Backbone = require 'backbone'
  TeamModel = require 'cs!models/team'

  class TeamsCollection extends Backbone.Collection

    model: TeamModel
    comparator: (model) ->
      model.get('location') + model.get('name')

    initialize: (models,options) ->
      @sort()
      @league = options.league

