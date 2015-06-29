define([
  'marionette',
  'views/color_picker'
], function (
  Marionette,
  ColorPickerView
) {
  
  'use strict';
  
  return Backbone.Marionette.Layout.extend({
    template: '#tape-new-template',
    regions: {
      'color': '.new-tape-color-picker',
      'bgColor': '.new-tape-background-color-picker'
    },
    
    onRender: function() {
      var colorPickerView   = new ColorPickerView();
      var bgColorPickerView = new ColorPickerView();

      this.color.show(colorPickerView);
      // this.bgColor.show(bgColorPickerView);
    }
  });

});