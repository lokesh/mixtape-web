define([
  'marionette',
  'collections/tapes',
  'views/tapes_list'
], function (
  Marionette,
  Tapes,
  TapesListView
) {
  'use strict';

  var app           = new Marionette.Application();
  var tapes         = new Tapes();
  
  var tapesListView = new TapesListView({
    collection: tapes
  });

  app.addInitializer(function(options) {


    $('#content').append(tapesListView.render().$el);

    tapes.fetch();
        
  });

  return app;
});