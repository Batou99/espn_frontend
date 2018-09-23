# ESPN Architecture

This document describe the basic architecture, layout and libraries used for developing the ESPN frontend.

## Libraries and Architecture

All the structure for the client side is created using [Yeoman](http://yeoman.io). Go to the yeoman website to see instructions on how to use this tool.The most used commands used in this application are:

* Create basic structure: `yeoman init`
* Install a library: `yeoman install library`
* Add a Backbone view: `yeoman init backbone:view name`
* Add a Backbone model: `yeoman init backbone:model name`
* Start web server: `yeoman server`
* Run tests: `yeoman server:test`

The client side application is written using javascript using these libraries

* [Backbone](http://backbonejs.org/): This is the main library for the client, is used a the main glue to run javascript, access the server side, parse JSON, etc.
* [Backbone Relational](https://github.com/PaulUithol/Backbone-relational): This library is used to make relationships between models the same way ActiveRecord does.
* [JQuery](http://jquery.com/): Used to modify the dom tree and generaly access data from a page
* [Underscore](http://underscorejs.org/): This library is used implicily by backbone. Is used to render the views also.
* [RequireJS](http://requirejs.org/): Is used to load the libraries into the client using paralel loading when possible (see http://requirejs.org/docs/whyamd.html)
* [RequireJS Text](git://github.com/requirejs/text.git): Used to require the templates into the views.
* [RequireJS i18n](git://github.com/requirejs/i18n.git): Used to load internationalization resources.
* [Jasmine](https://jasmine.github.io/): The test framework for javascript
* [Jasmine jQuery](https://github.com/velesin/jasmine-jquery): Library to test views using jasmine

The server side is a web services based app written using ruby using this libraries:

* [Grape](https://github.com/intridea/grape): A micro-framework used to develop web services using ruby (Very similar to Sinatra)
* [Thin](http://code.macournoyer.com/thin/): A minimal web server.
* [ActiveRecord](https://rubygems.org/gems/activerecord): Gem to abstract the access to databases
* [RSpec](http://rspec.info/): Testing framework for ruby
* [Guard](https://github.com/guard/guard): Gem used to provide continuous testing in ruby environments.
* [SimpleCov](https://github.com/relevance/rcov): Library to provide code coverage stats

Here is a basic diagram for the applications made using this architecture.
![Architecture](https://docs.google.com/drawings/d/1BdEkz8RgvyW0ckxw464Wpdg6V30eawgejTOA3aogrpE/pub?w=963&h=676)
