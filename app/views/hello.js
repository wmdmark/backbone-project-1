HelloView = Backbone.View.extend({
  render: function(){
    // Load our template from the templates folder
    var template = require("./templates/hello")

    // Render the template into our el using the 
    // model's JSON data
    this.$el.html(template(this.model.toJSON()))

    // the render function must return this
    return this;
  }
});

module.exports = HelloView