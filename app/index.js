'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var JsptGenerator = module.exports = function JsptGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(JsptGenerator, yeoman.generators.Base);

JsptGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [];
/*
  prompts.push({
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  });
*/

  this.prompt(prompts, function (props) {
    //this.someOption = props.someOption;

    cb();
  }.bind(this));
};

JsptGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');
};

JsptGenerator.prototype.gruntfile = function gruntfile() {
  this.copy('Gruntfile.js');
};

JsptGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('csslintrc', '.csslintrc');
  this.copy('htmlhintrc', '.htmlhintrc');
};

JsptGenerator.prototype.setupEnv = function setupEnv() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/scripts/vendor/');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.copy('index.html', 'app/index.html');
  this.copy('main.less', 'app/styles/main.less');
};

JsptGenerator.prototype.setupTestEnv = function setupTestEnv() {
  this.mkdir('test');
  this.mkdir('test/spec');
  this.template('test-index.html', 'test/index.html');
  this.template('test-runner.js', 'test/test-runner.js');
  this.template('test.js', 'test/spec/test.js');
};

JsptGenerator.prototype.mainJs = function mainJs() {
  this.template('requirejs_app.js', 'app/scripts/main.js');
  this.template('app-main.js', 'app/scripts/app-main.js');
};
