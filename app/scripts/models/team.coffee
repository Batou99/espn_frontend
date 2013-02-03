define (require) ->
  Backbone = require 'backbone'

  class TeamModel extends Backbone.Model
    fullname: -> "#{@get 'location'} #{@get 'name'}"
