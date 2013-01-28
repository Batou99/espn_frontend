define(function(require) {
  var  Backbone = require('backbone'),
    PersonModel = require('models/person-model')

  var CvModel = Backbone.Model.extend({
    defauls: {
      _id: 0,
      person: {},
      updated_on: "",
      skillset: [],
      skills: [],
  
    },

    idAttribute: '_id',

    url: function() { return '/api/cvs/' + this.get('_id') + '.json' },

  });
  return CvModel;
});
