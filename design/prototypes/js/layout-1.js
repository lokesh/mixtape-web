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
  'underscore',
  'handlebars'
], function(
  $,
  _,
  handlebars
) {
  var $app         = $(document.getElementById('app'));
  var windowWidth  = $(window).width();
  var windowHeight = $(window).height();

  var playlistTemplate = Handlebars.compile($(document.getElementById('playlist-template')).html());
  var trackTemplate    = Handlebars.compile($(document.getElementById('track-template')).html());

  layoutApp();
  loadPlaylists('http://localhost:8000/data/playlists.json');

  function layoutApp() {
    $app.width(windowWidth);
    $app.height(windowHeight);
  }

  function loadPlaylists(url) {
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json'
    }).done(function(data, textStatus, jqXHR) {
      renderPlaylists(data.result.owned);
    }).fail(function(data, textStatus) {
      console.log('FAIL: unable to load playlists');
    });
  }

  function renderPlaylists(playlists) {
    _.each(playlists, function(playlist) {
      renderPlaylist(playlist);
    });

    $('.playlist').each(function(index, playlist) {
      $(playlist).css({
        'width': windowWidth,
        'height': windowHeight,
        'left': windowWidth * index
      });
    });
  }

  function renderPlaylist(playlist) {
    var $playlist = $(playlistTemplate(playlist)).appendTo($app);
    _.each(playlist.tracks, function(track) {
      $playlist.append(trackTemplate(track));
    });
  }

  function slidePlaylistsLeft() {
    $('.playlist').each(function(index, playlist) {
      $(playlist).css('left', parseInt($(playlist).css('left'), 10) - windowWidth);
    });
  }

  function slidePlaylistsRight() {
    $('.playlist').each(function(index, playlist) {
      $(playlist).css('left', parseInt($(playlist).css('left'), 10) + windowWidth);
    });
  }

  $(document).on('keydown', function(event) {
    if (event.keyCode === 39) { // Right arrow
      slidePlaylistsLeft();
    } else if (event.keyCode === 37) { // Left arrow
      slidePlaylistsRight();
    }
  });

});