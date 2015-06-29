define([
  'marionette',
  'modules/vent',
  'views/tapes_list'
], function (
  Marionette,
  vent,
  TapesListView
  ) {
  
  'use strict';

  return Marionette.Layout.extend({
    template: '#home-template',
    regions: {
      'list': '.tapes-list'
    },
    events: {
      'click .tab-link': 'handleTabLinkClick',
      'click .new-tape-button': 'handleNewTapeButtonClick'
    },

    onRender: function() {
      var tapesListView = new TapesListView({
        collection: this.collection
      });

      this.list.show(tapesListView);
    },

    handleTabLinkClick: function(event) {
      event.preventDefault();
      var $target = $(event.target);

      if ($target.hasClass('off')) {
        this.$el.find('.tab-link')
          .removeClass('on')
          .addClass('off');
        $target
          .removeClass('off')
          .addClass('on');

        switch ($target.data('name')) {
          case 'trending':
            vent.trigger('trending:show');
            break;
          case 'your-tapes':
            vent.trigger('user-tapes:show');
            break;
          case 'faves':
            vent.trigger('favorites:show');
            break;
        }
      }
      
    },

    handleNewTapeButtonClick: function(event) {
      vent.trigger('tape:new');
    }

  });

});