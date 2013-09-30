define([
  'marionette',
  'collections/tapes',
  'views/tape_new',
  'views/tape',
  'views/tapes_browse'
], function (
  Marionette,
  Tapes,
  TapeNewView,
  TapeView,
  TapesBrowserView
) {
 
  'use strict';
  
  var app = new Marionette.Application();
  
  app.addRegions({
    'header': '.app-header',
    'content': '.app-content'
  });

  app.vent.on('showBrowseTapes', function () {
    app.router.navigate('', {trigger: true});
  });

  app.vent.on('showTape', function (playlist) {
    var tapeView = new TapeView({
      model: playlist
    });
    app.content.show(tapeView);
    app.router.navigate('tape/name', {trigger: true});
    $(window).scrollTop(0);
  });

  app.vent.on('showNewTapeForm', function () {
    app.router.navigate('new', {trigger: true});
  });

  // Debugging
  app.vent.on('all', function (event, model) {
    console.log('Event Caught: ' + event);
    if (model) {
        console.dir(model);
    }
  });


  window.app = app;
  return app;
});