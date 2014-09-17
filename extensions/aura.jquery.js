/**
 * Created by supriyag on 26-08-2014.
 */

define(function () {
    'use strict'
    return function (app) {
        return {
            require: {
                paths: {
                    'jquery': 'bower_components/jquery/jquery.min',
                    'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min'
                },
                shim: {

                    'bootstrap': {
                        deps: ['jquery'], exports: '$.fn.popover'
                    }
                }
            },
            initialize: function () {
                var jQuery = require('jquery'),
                    BootstrapJS = require('bootstrap');

                app.sandbox.$ = jQuery;

            }
        }

    }
});