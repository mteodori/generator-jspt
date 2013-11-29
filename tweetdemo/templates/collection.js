/*global define*/

define([
    'underscore',
    'backbone',
    'models/<%= name %>'
], function (_, Backbone, <%= this._.classify(this.name) + 'Model' %>) {
    'use strict';

    var <%= this._.classify(this.name) %>Collection = Backbone.Collection.extend({
        model: <%= this._.classify(this.name) %>Model
    });

    return <%= this._.classify(this.name) %>Collection;
});
