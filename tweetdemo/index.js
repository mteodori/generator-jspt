'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var TweetdemoGenerator = module.exports = function TweetdemoGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the tweetdemo subgenerator with the argument ' + this.name + '.');
};

util.inherits(TweetdemoGenerator, yeoman.generators.NamedBase);

TweetdemoGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
