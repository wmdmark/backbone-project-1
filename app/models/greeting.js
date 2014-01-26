// The Album Backbone Model. Represents the data used by our album.
Greeting = Backbone.Model.extend({
  defaults: {
    greeting: "Hello!"
  }
});

// Make the model available to require imports
module.exports = Greeting