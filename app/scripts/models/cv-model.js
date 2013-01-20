define(function(require) {
  var  Backbone = require('backbone'),
    PersonModel = require('models/person-model'),
            rel = require('relational');

  var CvModel = Backbone.RelationalModel.extend({
    defauls: {
      _id: 0,
      person: {},
      updated_on: "",
      skillset: [],
      skills: [],
  
    },

    idAttribute: '_id',

    url: function() { return '/api/cvs/' + this.get('_id') + '.json' },

    relations: [{
      type: Backbone.HasOne,
      key: 'person',
      relatedModel: PersonModel
    }
    ]
  });
  return CvModel;
});
