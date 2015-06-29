define(['marionette', 'views/tape_banner'], function (Marionette, TapeBannerView) {
  
  'use strict';

  return Backbone.Marionette.CollectionView.extend({
    itemView: TapeBannerView
  });

});