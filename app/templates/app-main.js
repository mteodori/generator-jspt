/*global require*/
'use strict';

require(['require', 'main'], function (require) {
    require([
        'backbone'
    ], function (Backbone) {
        window.alert('RequireJS Main Application Started');
        Backbone.history.start();
    });
});
