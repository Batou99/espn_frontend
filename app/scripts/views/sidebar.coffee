define (require) ->
  Backbone = require 'backbone'
  template = require 'text!templates/sidebar.html'

  class SidebarView extends Backbone.View
    template: _.template(template)

    initialize: ->
      _.bindAll(@,"render")
      # Render sidebar when we have data
      @model.bind('reset',@render)
      # Only AJAX call for sidebar
      @model.fetch()

    render: ->
      console.log 'render'
      $('.sidebar-nav').html(@template())


