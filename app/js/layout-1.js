require.config({
  paths: {
    'jquery': 'libs/jquery/jquery',
    'underscore': 'libs/underscore-amd/underscore',
    'backbone': 'libs/backbone-amd/backbone',
    'handlebars': 'libs/handlebars/handlebars'
  }
});

require([
  'jquery',
  'handlebars'
], function(
  $,
  handlebars
) {
  var source   = $('#track-template').html();
  var template = Handlebars.compile(source);
  console.log(template());
});