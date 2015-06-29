define([
  'marionette',
  'entities/favorites',
  'entities/trending_tapes',
  'entities/user_tapes',
  'views/tape_new',
  'views/tape',
  'views/home'
], function (
  Marionette,
  Favorites,
  TrendingTapes,
  UserTapes,
  TapeNewView,
  TapeView,
  HomeView
) {
 
  'use strict';
  
  return Marionette.Controller.extend({

    initialize: function(options) {
      this.header  = options.headerRegion;
      this.content = options.contentRegion;
    },

    showTrending: function() {
      console.log('showTrending');
      var trendingTapes = new TrendingTapes();
      var homeView      = new HomeView({
        collection: trendingTapes
      });

      this.content.show(homeView);
      trendingTapes.fetch();
    },
  
    showUserTapes: function() {
      var userTapes = new UserTapes();
      var homeView  = new HomeView({
        collection: userTapes
      });
      
      this.content.show(homeView);
      userTapes.fetch();
    },

    showFavorites: function() {
      var favorites = new Favorites();
      var homeView  = new HomeView({
        collection: favorites
      });
      
      this.content.show(homeView);
      favorites.fetch();
    },

    showNewTapeForm: function () {
      var tapeNewView = new TapeNewView();
      this.content.show(tapeNewView);
    },

    showTape: function(tape) {
      var tapeView = new TapeView({
        model: tape
      });

      this.content.show(tapeView);
      
      $(window).scrollTop(0);
    },

    isUserLoggedIn: function() {
      // if(!userSession.authenticated()){
      //   App.Router.navigate('login', {trigger: true});
      // }

      return true;
    }

  });

});