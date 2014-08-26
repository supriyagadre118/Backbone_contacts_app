/**
 * Created by supriyag on 26-08-2014.
 */
define(["contacts.core", '../model/contact.details'],
    function (contacts, contactDetails) {
        var contactDetails = Backbone.Collection.extend({
            model: contactDetails,
            url: function () {
                return 'http://localhost:63342/backbone_contacts_app/contact.details.json';
            },
            parse: function (result) {
                var data = [];
                _.each(result.details, function (r) {
                    data.push(r);
                });

//                console.log(data);
                return data;
            }

        });
        return contactDetails;
    });
