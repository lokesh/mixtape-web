require.config({
  paths: {
    'text' : '../bower_components/requirejs-text/text',
    'json2' : '../bower_components/require-handlebars-plugin/hbs/json2',
    'jquery': '../bower_components/jquery/jquery',
    'underscore': '../bower_components/underscore-amd/underscore',
    'backbone': '../bower_components/backbone-amd/backbone',
    'marionette' : '../bower_components/marionette/lib/core/amd/backbone.marionette',
    'backbone.wreqr' : '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
    'backbone.eventbinder' : '../bower_components/backbone.eventbinder/lib/amd/backbone.eventbinder',
    'backbone.babysitter' : '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
    'localstorage' : '../bower_components/backbone.localStorage/backbone.localStorage'
  }
});

require([
  'apps/app',
  'backbone',
], function(app, Backbone, Router, Controller) {

  'use strict';
  
  app.start();

  Backbone.history.start({
    pushState: false
  });

});