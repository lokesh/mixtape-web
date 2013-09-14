require.config({
  paths: {
    'jquery': 'libs/jquery/jquery',
    'underscore': 'libs/underscore-amd/underscore',
    'backbone': 'libs/backbone-amd/backbone',
    'handlebars': 'libs/handlebars/handlebars'
  }
});

require(['views/app'], function(AppView) {
  var appView = new AppView();
});