/**
 * Created by supriyag on 26-08-2014.
 */

define(['../model/contacts.model'],
    function (contactsModel) {
        'use strict';
        var contactsCollection = Backbone.Collection.extend({
            model: contactsModel,
            url: function () {
                return 'http://localhost:63342/backbone_contacts_app/contact.details.json';
            },
            parse: function (result) {
                return result;
            }

        });
        return contactsCollection;
    });