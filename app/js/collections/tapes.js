define([
  'backbone',
  'models/tape'
], function (Backbone, Tape) {
  'use strict';

  return Backbone.Collection.extend({
    model: Tape,
    url: "http://localhost:8000/data/playlists.json",

    parse: function(response) {
      return response.result.owned;
    }

  });
});