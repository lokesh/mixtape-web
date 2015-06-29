define(['marionette', 'views/track'], function (Marionette, TrackView) {
  
  'use strict';
  
  return Backbone.Marionette.CollectionView.extend({
     itemView: TrackView
  });

});