define(['backbone', 'marionette'], function (Backbone, Marionette) {

  'use strict';

  return Backbone.Marionette.AppRouter.extend({
   
    // Methods for handling routing are in controller.js
    appRoutes: {
      'new': 'showNewTapeForm',
      'tape/:tape': 'showTape',
      '*action': 'showBrowseTapes'
    }
  });
    
});