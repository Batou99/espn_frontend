cvApp.Models.CvModel = Backbone.RelationalModel.extend({
  defauls: {
    _id: 0,
    person: {}
  },

  idAttribute: '_id',

  url: function() { return '/api/cvs/' + this.get('_id') + '.json' },

  relations: [{
    type: Backbone.HasOne,
    key: 'person',
    relatedModel: 'cvApp.Models.PersonModel'
  }]
});
