/**
 * Created by supriyag on 26-08-2014.
 */
define(["contacts.core"],
    function (contacts) {
        var contactDetails = Backbone.Model.extend({
            initialize: function () {
            },
            parse: function (result) {
                return result;
            }
        });
        return contactDetails;
    });