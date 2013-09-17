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
  var playlistData;

  var $app           = $(document.getElementById('app'));
  var $playlistsView = $(document.getElementById('playlists-view'));
  var windowWidth    = $(window).width();
  var windowHeight   = $(window).height();

  var playlistTemplate = Handlebars.compile($(document.getElementById('playlist-template')).html());
  var trackTemplate    = Handlebars.compile($(document.getElementById('track-template')).html());

  var colors = ['#ec5757', '#ffd366', '#63d384', '#3dc5e4', '#a083c8', '#f18b58',
                '#ffb452', '#57d0b0', '#2185e3', '#b687c6'];

  layoutApp();
  loadPlaylists('http://localhost:8000/data/playlists.json');

  function layoutApp() {
    $app.width(windowWidth);
    $app.height(windowHeight);
    $('.new-playlist-button').width(windowWidth);
  }

  function loadPlaylists(url) {
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json'
    }).done(function(data, textStatus, jqXHR) {
      playlistData = data.result.owned;
      renderPlaylists(data.result.owned);
    }).fail(function(data, textStatus) {
      console.log('FAIL: unable to load playlists');
    });
  }

  function renderPlaylists(playlists) {
    _.each(playlists, function(playlist, index) {
      var $playlist = $(playlistTemplate(playlist)).appendTo('.playlists');
      var colorIndex = Math.floor(Math.random() * colors.length);
      $playlist.css({
        'background': colors[colorIndex],
        'top': (index + 1) * 80,
        'width': windowWidth + 'px'
      });
    });
  }

  function renderPlaylist(playlistId) {
    var $playlist = $(document.getElementById(playlistId));
    var playlist = _.where(playlistData, {'key': playlistId})[0];
    _.each(playlist.tracks, function(track, index) {
      $track = $(trackTemplate(track)).appendTo($playlist.find('.tracks'));
      $track.css({
        'top': 100 * (index + 1) + 80 + 'px',
        'width': windowWidth + 'px'
      });
      
      setTimeout(function() {
        $(document.getElementById(track.key)).css({
          'top': 100 * index + 80 + 'px',
          'opacity': 1,
          'background-color': colors[index]
        });
      }, index * 100);
    //   $track.css('background', shadeColor(color, index * -2));
    });
  }

  function shadeColor(color, percent) {
      var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, B = (num >> 8 & 0x00FF) + amt, G = (num & 0x0000FF) + amt;
      return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
  }

  $playlistsView.on('click', '.playlist', function(event) {
    slidenewPlaylistButtonUp();
    staggerPlaylistsLeft($(event.currentTarget));
  });

  function slidenewPlaylistButtonUp() {
    $('.new-playlist-button').css({
      'opacity': '0.5',
      'top': '-80px'
    });
  }

  function staggerPlaylistsLeft(clickedPlaylist) {
    $('.playlist').not(clickedPlaylist).each(function(index, playlist) {
      $(playlist).css('opacity', '0.5');
      setTimeout(function() {
        $(playlist).css('left', '-' + windowWidth + 'px');
      }, index * 100);
    });
    setTimeout(function() {
      clickedPlaylist.css('top', '0');
      renderPlaylist(clickedPlaylist[0].id);
    }, ($('.playlist').length - 1) * 200);
  }


  // function slidePlaylistsLeft() {
  //   $('.playlist').each(function(index, playlist) {
  //     $(playlist).css('left', parseInt($(playlist).css('left'), 10) - windowWidth);
  //   });
  // }

  // function slidePlaylistsRight() {
  //   $('.playlist').each(function(index, playlist) {
  //     $(playlist).css('left', parseInt($(playlist).css('left'), 10) + windowWidth);
  //   });
  // }

  // $(document).on('keydown', function(event) {
  //   if (event.keyCode === 39) { // Right arrow
  //     slidePlaylistsLeft();
  //   } else if (event.keyCode === 37) { // Left arrow
  //     slidePlaylistsRight();
  //   }
  // });

});