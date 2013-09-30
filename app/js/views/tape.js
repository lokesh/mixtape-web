define([
  'marionette',
  'collections/tracks',
  'views/tracks'
], function (Marionette, Tracks, TracksView) {
  
  'use strict';

  return Backbone.Marionette.Layout.extend({
    template: '#tape-template',
    regions: {
      'tracks': '.tracks'
    },

    onRender: function() {
      var tracks = new Tracks(this.model.get('tracks'));

      var tracksView = new TracksView({
        collection: tracks
      });

      this.tracks.show(tracksView);
    }
  });

});