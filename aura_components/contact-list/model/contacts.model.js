/**
 * Created by supriyag on 26-08-2014.
 */
define([],
    function () {
        'use strict';
        var contactsModel = Backbone.Model.extend({
            initialize: function () {
            },
            parse: function (result) {
                return result;
            }
        });
        return contactsModel;
    });