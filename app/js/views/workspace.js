define(['marionette'], function (Marionette) {
  'use strict';

  return Backbone.Marionette.Layout.extend({
    template: '#workspace-template',

    regions: {
      sources: '#sources',
      filters: '#filters',
      commands: '#commands',
      editor: '#editor'
    }

  });
});