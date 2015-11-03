var Album = Parse.Object.extend("Album");
var Track = Parse.Object.extend("Track");

var NewAlbum = Backbone.View.extend({
    initialize: function(){
      this.newAlbum = new Album();
    },

    events: {
      "click .SaveAlbum" : "SaveNewAlbum",
      "change .imageButton" : "UploadImage"
    },

    SaveNewAlbum: function() {
      var title = this.$(".AlbumTitle").val();
      var artist = this.$(".Artist").val();
      var description = this.$(".Description").val();
      this.newAlbum.set("name", title);
      this.newAlbum.set("artist", artist);
      this.newAlbum.set("description", description);

      console.log(this.newAlbum)

      this.newAlbum.save(null, {
        success: function(album){
          console.log("successfully saved new album");
          console.log("album: ", album);
        }
      });
    },

    UploadImage: function(event) {
      var file = event.target.files[0];
      var path = "./data/" + file.name
      this.newAlbum.set("image", path);
      this.render();
    },

    render: function() {
    // Load our template from the templates folder
      var template = require("./templates/new-album");      
      this.$el.html(template({ img: this.newAlbum.get("image") }));
      return this;
    },
});

module.exports = NewAlbum