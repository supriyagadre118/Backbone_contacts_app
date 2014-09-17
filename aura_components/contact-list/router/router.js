/**
 * Created by supriyag on 01-09-2014.
 */
define([],
    function () {
        'use strict';

        var router = Backbone.Router.extend({

            routes: {
                "help/:page":         "help",
                "download/*path":     "download",
                "folder/:name":       "openFolder",
                "folder/:name-:mode": "openFolder"
            },
            initialize : function(){
                console.log('initialized...');
            }

        });
        return router;
    });