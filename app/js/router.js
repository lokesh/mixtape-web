define(['marionette', 'controller'], function (marionette, Controller) {
  'use strict';

  return Backbone.Marionette.AppRouter.extend({
    // "someMethod" must exist at controller.someMethod
    appRoutes: {
      "some/route": "someMethod"
    },

    /* standard routes can be mixed with appRoutes/Controllers above */
    routes : {
      "some/otherRoute" : "someOtherMethod"
    },
    someOtherMethod : function(){
      // do something here.
    }
  });
    
});