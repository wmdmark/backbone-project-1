var Album = Parse.Object.extend("Album");
var Track = Parse.Object.extend("Track");

var TrackView = Backbone.View.extend({
    initialize: function(album){
      this.id = album.id;
      this.album = null;
      this.tracks = [];
      //this.listenTo(this, 'change', this.render);
    },

    loadAlbum: function() {
      //Get our info from parse database using id 

      var self = this;

      var query = new Parse.Query(Album)
      query.equalTo("objectId", self.id);
      query.first({
        success: function(album) {
          // Successfully retrieved the object.
          console.log("album", self.album);
          self.album = album;
          var query = new Parse.Query(Track);
          query.equalTo("album", self.album);
          query.find({
            success: function(tracks) {
              // tracks now contains the tracks for album
              console.log("tracks", tracks);
              for (var i = 0; i < tracks.length; i++) {
                console.log(tracks[i].attributes);
                self.tracks.push(tracks[i].attributes);
              }
              self.album.set("tracks", self.tracks);
              self.render();
            }
          });
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    },

    render: function() {
    // Load our template from the templates folder
      var template = require("./templates/album")
      
      if (this.album != null) {
        this.$el.html(template(this.album.toJSON()));
        return this;
      } 
      else {
        this.loadAlbum();
      }

      return this;
    },
});

module.exports = TrackView