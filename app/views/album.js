var AlbumView = Backbone.View.extend({
    initialize: function(album){
      //_.bindAll(this, functions(this));
      //this.template = _.template('<h1>{{name}}</h1>');
      this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      //var template = $('#CDTemplate').html();
      //template = Handlebars.compile(template);

      // Load our template from the templates folder
     var template = require("./templates/album")

    // Render the template into our el using the 
    // model's JSON data

     this.$el.html(template(this.model.toJSON()))
     $("#app-views").append(this.$el);
    }
});

//module.exports = HelloView
module.exports = AlbumView