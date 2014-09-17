/**
 * Created by supriyag on 26-08-2014.
 */
define(function () {
    'use strict';
    return function (app) {
        return {
            require: {

            },
            initialize: function (app) {
                var config = {};
                config.serverURL = "http:// 172.25.33.81:9000/";
                app.sandbox.config = config;
            }
        }
    }
});