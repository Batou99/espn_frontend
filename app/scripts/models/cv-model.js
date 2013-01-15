define(['backbone','models/person-model','backbone-relational'], function(Backbone,PersonModel) {
  var CvModel = Backbone.RelationalModel.extend({
    defauls: {
      _id: 0,
      person: {},
      updated_on: ""
    },

    idAttribute: '_id',

    url: function() { return '/api/cvs/' + this.get('_id') + '.json' },

    relations: [{
      type: Backbone.HasOne,
      key: 'person',
      relatedModel: PersonModel
    }]
  });
  return CvModel;
});
