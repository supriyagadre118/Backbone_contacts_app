/**
 * Created by supriyag on 26-08-2014.
 */
define(['contacts.core', 'text!../templates/contact.item.html'],
    function (contacts,contactItemTpl) {
        'use strict';
        var resultItemView = Backbone.View.extend({

            tagName: 'div',
            events:{
                'click .display-details': "showDetails"
            },
            el: '#contact-body',
            template: _.template(contactItemTpl),
            initialize: function (options) {
                this.options = options || {};
                this.render(this.options.item);
            },
            render: function (detail) {
                //console.log(detail)
                this.options.parentEl.append(this.template({record: detail}));
            },
            showDetails : function(event){
                var id = $(event.currentTarget).attr('id');
                console.log(id);
                contacts.sandbox.emit('show.details',id);
//                contacts.sandbox.$('#contact-details-modal').modal('show');
            }
        });
        return resultItemView;
    });