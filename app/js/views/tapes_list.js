define(['marionette', 'views/tape_screamer'], function (Marionette, TapeScreamerView) {
  'use strict';

  return Backbone.Marionette.CollectionView.extend({
    itemView: TapeScreamerView
  });

});