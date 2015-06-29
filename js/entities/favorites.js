define([
  'underscore',
  'backbone',
  'entities/tape'
], function (
  _,
  Backbone,
  Tape
) {
  
  'use strict';

  return Backbone.Collection.extend({
    model: Tape,
    url: "http://localhost:8000/data/favorites.json",

    parse: function(response) {
      return (response) ? response.result.owned: response;
    }

  });
});