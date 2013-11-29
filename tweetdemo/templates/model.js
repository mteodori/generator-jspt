/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var <%= this._.classify(this.name) %>Model = Backbone.Model.extend({
        defaults: {
        }
    });

    return <%= this._.classify(this.name) %>Model;
});
