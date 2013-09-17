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

  var colors = ['#ec5757', '#ff7c4f', '#ffd366', '#63d384', '#3dc5e4', '#a083c8'];

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
    
    var random1 = Math.floor(Math.random() * colors.length);
    var random2;
    while (_.isUndefined(random2) || random1 === random2) {
      random2 = Math.floor(Math.random() * colors.length);
    }
    var color1  = colors[random1];
    var color2  = colors[random2];
    var palette = generateColorPalette(color1, color2, playlist.tracks.length);

    var durationPercentage;
    _.each(playlist.tracks, function(track, index) {
      $track = $(trackTemplate(track)).appendTo($playlist);
      durationPercentage = 20 + Math.round(track.duration/5);
      durationPercentage = (durationPercentage > 100)? 100: durationPercentage;
      $track.css('background', 'linear-gradient(to right, ' + palette[index] + ' ' + durationPercentage + '%, #333 ' + durationPercentage + '%)');
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

  function generateColorPalette(color1, color2, colorCount) {
    var palette = [];

    color1 = color1.replace('#','');
    color2 = color2.replace('#','');
    var r1 = parseInt(color1.slice(0,2), 16);
    var g1 = parseInt(color1.slice(2,4), 16);
    var b1 = parseInt(color1.slice(4,6), 16);
    var r2 = parseInt(color2.slice(0,2), 16);
    var g2 = parseInt(color2.slice(2,4), 16);
    var b2 = parseInt(color2.slice(4,6), 16);
    var rStep = (r2 - r1) / (colorCount - 1);
    var gStep = (g2 - g1) / (colorCount - 1);
    var bStep = (b2 - b1) / (colorCount - 1);
    for (var i = 0; i < colorCount; i++) {
      palette.push(
        '#' +
        (Math.round(r1 + (rStep * i))).toString(16) +
        (Math.round(g1 + (gStep * i))).toString(16) +
        (Math.round(b1 + (bStep * i))).toString(16)
      );
    }
    return palette;
  }

  $(document).on('keydown', function(event) {
    if (event.keyCode === 39) { // Right arrow
      slidePlaylistsLeft();
    } else if (event.keyCode === 37) { // Left arrow
      slidePlaylistsRight();
    }
  });

});