var Album = Parse.Object.extend("Album");
var Albume = Backbone.Model.extend({});

var AlbumCollection = Backbone.Collection.extend({
  model: Albume
});

var albumCollection = new AlbumCollection();

var AlbumListView = Backbone.View.extend({
    initialize: function(Album){
      this.collection = albumCollection;
      this.listenTo(this.collection, 'add', this.render);
      if(Album)
        this.loadAlbums();
    },

    loadAlbums: function() {
      var query = new Parse.Query(Album)
      query.find().then(function(results,a,b) {
        // for each result, render the album-list-view and append to this.$el
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          albumCollection.add(object.attributes);
        }
      })
    },

    render: function() {
    // Load our template from the templates folder
      var template = require("./templates/album-grid")
      var albumList = albumCollection.models;
      var albums = [];
      albumList.forEach(function(model){
        albums.push(model.attributes);
      })

      this.$el.html(template({albums: albums}));
      return this;
    }
});

module.exports = Album 
module.exports = AlbumListView