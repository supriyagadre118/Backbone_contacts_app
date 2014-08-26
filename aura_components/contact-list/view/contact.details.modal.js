/**
 * Created by supriyag on 26-08-2014.
 */
define(['contacts.core', 'text!../templates/contact.details.modal.html'],
    function (contacts,contactDetailsTpl) {
        'use strict';
        var detailsView = Backbone.View.extend({

            tagName: 'div',
            events:{

            },
            el: '#contact-details-modal',
            template: _.template(contactDetailsTpl),
            initialize: function (options) {
                this.options = options || {};
                this.render();
            },
            render: function () {
                this.options.parentEl.append(this.template());
            }
        });
        return detailsView;
    });