define(function() {  
  return Backbone.Router.extend({
    routes: {
      ':album/tracks': 'tracks'
    },

    initialize: function() {
    },

    tracks: function(album) {
    	
    }
  });
});