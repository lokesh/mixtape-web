define(['marionette'], function (Marionette) {
  
  'use strict';
  
  return Backbone.Marionette.ItemView.extend({
    template: '#tape-banner-template',
    events: {
      'click .tape-banner': 'handleTapeBannerClick'
    },

    handleTapeBannerClick: function(event) {
      app.vent.trigger('showTape', this.model);
    }
  });

});