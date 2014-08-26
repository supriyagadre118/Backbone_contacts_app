/**
 * Created by supriyag on 26-08-2014.
 */
define(function () {
    return function (app) {
        var Backbone, Router;
        return {
            require: {
                paths: {
                    'backbone': 'bower_components/backbone/backbone',
                    'underscore': 'bower_components/underscore/underscore'
                },
                shim: {
                    'backbone': {
                        exports: 'Backbone', deps: ['underscore', 'jquery']
                    }
                }
            },
            initialize: function (app) {
                Backbone = require('backbone');
                Router = Backbone.Router.extend({
                    initialized: function () {
                        console.log("router initialized..");
                    },
                    routes: {
                        '': 'fnHome',
                        'home': 'fnHome'
                    }
                });
                app.sandbox.router = new Router();
                Backbone.history.start({ root: '/' });
            }
        }
    }
});