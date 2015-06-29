define([
  'marionette',
  'modules/vent'
], function (
  Marionette,
  vent
) {
  
  'use strict';
  
  return Marionette.ItemView.extend({
    template: '#tape-banner-template',
    events: {
      'click .tape-banner': 'handleTapeBannerClick'
    },

    handleTapeBannerClick: function(event) {
      vent.trigger('tape:show', this.model);
    }

  });

});