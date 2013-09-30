define([
  'app',
  'collections/tapes',
  'views/tape_new',
  'views/tape',
  'views/tapes_browse'
], function (
  app,
  Tapes,
  TapeNewView,
  TapeView,
  TapesBrowserView
) {
 
  'use strict';

  return {
    
    showBrowseTapes: function() {
      var tapes            = new Tapes();
      var tapesBrowserView = new TapesBrowserView({
        collection: tapes
      });

      app.content.show(tapesBrowserView);
      tapes.fetch();
    },

    showNewTapeForm: function () {
      var tapeNewView = new TapeNewView();
      app.content.show(tapeNewView);
    },

    showTape: function(playlist) {
      // var tapeView = new TapeView({
      //   model: playlist
      // });
      // app.content.show(tapeView);
    },

    isUserLoggedIn: function() {
      // if(!userSession.authenticated()){
      //   App.Router.navigate('login', {trigger: true});
      // }


      return true;
    }
  };
});