
var AlbumListView = Backbone.View.extend({
    initialize: function(album){
      this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      /*
      var template = $('#CDTemplate').html();
      template = Handlebars.compile(template);

      this.$el.html(template(this.model.toJSON()));
      */

      // Load our template from the templates folder
    var template = require("./templates/album")

    // Render the template into our el using the 
    // model's JSON data

    this.$el.html(template(this.model.toJSON()))
      $("#app-views").append(this.$el);
    }
});

module.exports = ParseObject 
module.exports = AlbumListView