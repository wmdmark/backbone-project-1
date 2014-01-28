# Backbone Project 1: Learning the Basics

After completing this project you should understand and apply:

* Basic Backbone.js development
* Client side template rendering in Handlebars.js
* Using Brunch as a build tool

## Getting Setup

### Install the build tool

[Brunch](http://brunch.io/) is a build tool for client-side application development and it includes the ability to run a local server along with a slew of other nice features that we'll be taking advantage of in this project.

#### Installation Instructions
* Installing on [Windows](http://www.axelscript.com/2013/02/06/installing-brunch-io-on-windows/)
* Installing on [Mac](http://blog.stevenlu.com/2012/05/04/brunchio-on-mac-osx/)


### Install and run the project template

You'll be submitting this project using a source code control sytemn called Git. The code itself will be hosted on [Github](http://github.com). This will allow easy review of code.

I've created a template repository to get you started with Brunch and Backbone.

To get started:

1. [Install Git](https://help.github.com/articles/set-up-git). 
2. [Create a fork](https://help.github.com/articles/fork-a-repo) of this repository and pull it to your computer.
3. Run the project on your computer using the following commands in your terminal:

```shell
cd ~/<path-to-your-project-folder>
npm install
brunch w -s
```

Once you've done that, you should be able to open a brower to `http://localhost:3333/` and see the text "Hello World!" displayed on the screen.

### Exploring the code

Take a few minutes to browse the code that is being used to render "Hello World!" message on the screen.

The page that is being shown in the brower is `app/assets/index.html`. You'll see some code in there that is loading a Backbone Model and View and displaying it on the page.

Try and change the message to something else (hint: set the `greeting` attribute of the greeting model).

Now, we're going to commit your changes back to your fork of the Github repository. In your terminal and from your project folder type in the following command:
```shell
git status
```
You'll see a list of changes that you've made to your code.

Commit the changes using:
```shell
git commit -am "change greeting"
```

Once you've commited your changes, the next step is to push the changes to Github. Push your code using:
```shell
git push origin master
```
This tells your git repository to push your local changes to the remote repository (origin) using the master branch.

Now is a good time to learn more about Git and I reccomend doing so using this online, interactive course: [Try Git](http://try.github.io/levels/1/challenges/1)


# Start the Project

In this project you'll be using HTML, CSS (via SASS), Backbone.js and Handlebars to create the album widget picture here:

![](http://s3.amazonaws.com/pathwright-uploads/vHxvvzhjSDqbGJFNGGQt_Screen+Shot+2013-09-09+at+4.26.52+PM.png)

## Project Requirements
* You must load the album data from the JSON file found in `app/assets/data/album.json`. You may not include any of the album info or track info in your HTML templates.
The data will need to be loaded via a Backbone model
* Use Handlebars.js templates (built into Backbone) to render the HTML for your widget.
* Create at least one Backbone View and one Backbone Model to render your album widget. 


There's a lot to learn to be able to produce the desired result and meet the above requirements. You'll need to do quite a bit of practice and research before you're able to complete this project.


## Project Submission

When you've completed your project, be sure to push it you your fork of this project then let me know and I will review your code.

## Project Resources

Here is a collection of tutorials and resources that can help you as you're working through the project.

### JavaScript Resources
* Interactive JavaScript tutorials on [Codecademy](http://www.codecademy.com/tracks/javascript)
* Extensive [video tutorials](http://yuiblog.com/crockford/)

### Backbone Resources
* The [official documentation](http://backbonejs.org/).
* [Tutorials](http://backbonetutorials.com/) on various aspects of Backbone.
* [Free Interactive Course](http://backbone.codeschool.com/) from Code School.


### Other Resources
* Handlebars.js Template [Documentation](http://handlebarsjs.com/).
* SASS [Guide](http://sass-lang.com/guide)



