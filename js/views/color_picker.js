define(['marionette'], function (Marionette) {
  
  'use strict';
  
  var colors = [
    [120, 52, 0, 1],
    [189, 82, 0, 1],
    [241, 105, 0, 1],
    [255, 128, 30, 1],
    [255, 82, 83, 1],
    [206, 40, 124, 1],
    [184, 40, 198, 1],
    [87, 27, 200, 1],
    [0, 23, 227, 1],
    [0, 85, 228, 1],
    [77, 175, 251, 1],
    [39, 253, 50, 1],
    [21, 203, 0, 1],
    [0, 124, 2, 1],
    [78, 129, 0, 1],
    [123, 207, 0, 1],
    [166, 255, 42, 1],
    [201, 255, 69, 1],
    [232, 255, 30, 1],
    [255, 213, 21, 1],
    [255, 202, 34, 1],
    [205, 185, 31, 1],
    [121, 101, 0, 1],
    [0, 0, 0, 1],
    [182, 182, 182, 1],
    [230, 230, 230, 1],
    [255, 255, 255, 1]
  ];

  return Backbone.Marionette.ItemView.extend({
    tagName: 'div',
    className: 'color-picker',
    events: {
      'mousedown .color-picker': 'handleColorPickerMouseDown',
      'mousemove .color-picker': 'handleColorPickerMouseMove',
      'mouseup .color-picker': 'handleColorPickerMouseUp',
    },

    render: function() {
      this.$el.append(this.buildColorSwatches());
    },

    buildColorSwatches: function() {
      var fragment       = document.createDocumentFragment();
      // var colorSwatchTemplte = _.template("hello: <%= name %>");;

      _.each(colors, function(color) {
        var $div = $(document.createElement('div'))
          .addClass('color-swatch')
          .css('background-color', 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + color[3] + ')');
        // li.textContent = 'hi';
        fragment.appendChild($div[0]);
      });
      return fragment;
      // this.$el.html($(fragment).clone(true));
    },
    
    handleColorPickerMouseDown: function(event) {
      // app.vent.trigger('showTape', this.model);
    },

    handleColorPickerMouseMove: function(event) {
      // app.vent.trigger('showTape', this.model);
    },

    handleColorPickerMouseUp: function(event) {
      // app.vent.trigger('showTape', this.model);
    }

  });

});