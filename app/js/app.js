define([
  'marionette',
  'views/commands',
  'views/filters',
  'views/sources',
  'views/workspace'
], function (
  Marionette,
  CommandsView,
  FiltersView,
  SourcesView,
  WorkspaceLayout
) {
  'use strict';

  var $app    = $('#app');
  var $window = $(window);
  var app     = new Marionette.Application();

  app.addInitializer(function(options) {
    var workspace = new WorkspaceLayout();
    var sources   = new SourcesView();
    var filters   = new FiltersView();
    var commands  = new CommandsView();

    $app.append(workspace.render().$el);
    
    workspace.sources.show(sources);
    workspace.filters.show(filters);
    workspace.commands.show(commands);
    
    resize();
    $window.on('resize', resize);
  });

  function resize() {
    var winHeight = $window.height();
    var winWidth = $window.width();
    $('#app, #toolbar, #editor').height(winHeight);
    $('#editor').width(winWidth - 250);
  }
  
  // app.listenTo(todoList, 'all', function () {
  //   app.main.$el.toggle(todoList.length > 0);
  //   app.footer.$el.toggle(todoList.length > 0);
  // });

  // app.vent.on('todoList:filter', function (filter) {
  //   footer.updateFilterSelection(filter);

  //   document.getElementById('todoapp').className = 'filter-' + (filter === '' ? 'all' : filter);
  // });

  // app.vent.on('todoList:clear:completed', function () {
  //   todoList.getCompleted().forEach(function (todo) {
  //     todo.destroy();
  //   });
  // });

  return window.app = app;
});