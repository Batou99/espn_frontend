define (require) ->
  Backbone = require 'backbone'
  template = require 'text!templates/sidebar.html'
  LeagueView = require 'cs!views/league'

  class SidebarView extends Backbone.View
    template: _.template(template)

    initialize: ->
      _.bindAll(@,"render")
      # Render sidebar when we have data
      @model.bind('reset',@render)
      # Only AJAX call for sidebar
      @model.fetch()

    render: ->
      $('.sidebar-nav').html(@template())
      _(@model.models).each (league) ->
        lv = new LeagueView({model: league})
        $('.nav-list').append(lv.render())


