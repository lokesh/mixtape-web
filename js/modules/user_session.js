  define([
     'jquery',
     'underscore',
      'backbone',
      'cookie'
    ],
function($, _, Backbone, cookie){

    var UserSession = Backbone.Model.extend({

        defaults: {

            'accessToken': null,
            'userId': null
        },

        initialize: function(){

            this.load();
        },

        authenticated: function(){

            return Boolean(this.get('accessToken'));
        },

        save: function(authHash){

            $.cookie('userId', authHash.id);
            $.cookie('accessToken', authHash.accessToken);
        },

        load: function(){

            this.userId = $.cookie('userId');
            this.accessToken = $.cookie('accessToken');
        }
    });

    return new UserSession();

});