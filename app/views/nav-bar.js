var NavBar = Backbone.View.extend({
  initialize: function(){
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // user logged in and linked to app
        // handle this case HERE
        console.log("It's already connected!!");
        this.CurrentUser = Parse.User.current();
        console.log("user,", this.CurrentUser, response);
      }
    });
    var self = this;
    this.CurrentUser = Parse.User.current();

    if (this.CurrentUser) {
      var self = this;
      this.loadFacebookUserData();
    }
  },

	events: {
    	"click .login-button" : "onClickLogin",
      "click .logout-button" : "onClickLogout",
  	},

  	onClickLogin: function(e) {
      var self = this;
        if (!this.CurrentUser) {
          Parse.FacebookUtils.logIn(null, {
            success: function(user) {
                self.CurrentUser = user;
                self.loadFacebookUserData(function(result) {
                    self.CurrentUser.set("name", result);
                    console.log("I am ", result);
                    self.render();
                });
            },
            error: function(user, error) {
              alert("User cancelled the Facebook login or did not fully authorize.");
            }
          });
        } 
  	},

    onClickLogout: function(e) {
        Parse.User.logOut();
        this.CurrentUser = null;
        this.render();
    },

    loadFacebookUserData: function( callback ) {
      var self = this;
      if(this.CurrentUser) {
        FB.api('/me', function(response) {
          if(response && !response.error) {
            self.CurrentUser.set(response);
            self.render();
          }
        });
      }
    },

  	render: function() { 
	  // Load our template from the templates folder

      var template = require("./templates/nav-bar");
      var userData = this.CurrentUser ? this.CurrentUser.toJSON() : null;
      console.log("render: ", userData);
      this.$el.html(template({user: userData}));
      return this;
  	},
});

module.exports = NavBar