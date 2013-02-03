define (require) ->
  Backbone = require('backbone')
  class HeadlineModel extends Backbone.Model
    defaults:
      image: '/images/na.jpg'

