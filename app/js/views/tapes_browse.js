define(['marionette', 'views/tapes_list'], function (Marionette, TapesList) {
  
  'use strict';

  return Backbone.Marionette.Layout.extend({
    template: '#tapes-browse-template',
    regions: {
      'list': '.tapes-list'
    },
    events: {
      'click .new-tape-button': 'handleNewTapeButtonClick'
    },

    onRender: function() {
      var tapesList = new TapesList({
        collection: this.collection
      });
      this.list.show(tapesList);
    },

    handleNewTapeButtonClick: function(event) {
      app.vent.trigger('showNewTapeForm');
    }
  });

});