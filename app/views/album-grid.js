var Album = Parse.Object.extend("Album");

var AlbumListView = Backbone.View.extend({
    initialize: function(Album){
      this.albums = []
      if(Album)
        this.loadAlbums();
    },

    loadAlbums: function() {
      var query = new Parse.Query(Album)
      var self = this;
      query.find().then(function(results,a,b) {
        // for each result, render the album-list-view and append to this.$el
        for (var i = 0; i < results.length; i++) {
          self.albums.push(results[i])
        }
        self.render()
      })
    },

    render: function() {
    // Load our template from the templates folder
      var template = require("./templates/album-grid")
      this.$el.html(template({albums: this.albums}));
      return this;
    }
});

module.exports = Album 
module.exports = AlbumListView