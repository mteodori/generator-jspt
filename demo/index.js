'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var DemoGenerator = module.exports = function DemoGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.Base.apply(this, arguments);

  console.log('You called the demo subgenerator with the argument ' + this.name + '.');
};

util.inherits(DemoGenerator, yeoman.generators.NamedBase);

DemoGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
