// The Album Backbone Model. Represents the data used by our album.
Greeting = Backbone.Model.extend({
  defaults: {
    greeting: "Hello!"
  }
});

//The model that will be used for every item inside the collection
//(Backbone will traw to map every item into this model)
AlbumModel = Backbone.Model.extend({
    url: '/data/album.json'
  });

// Make the model available to require imports
//module.exports = Greeting
module.exports = AlbumModel