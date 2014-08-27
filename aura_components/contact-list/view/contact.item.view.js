/**
 * Created by supriyag on 26-08-2014.
 */

define(['contacts.core','text!../templates/contact.item.html'],
    function (contacts,contactItemTpl) {
        'use strict';
        var contactItemView = Backbone.View.extend( {
            template : _.template(contactItemTpl),
            initialize : function(options){
                this.options = options || {};
                this.render(options.item);

            },
            render : function(record){
                this.options.parentEl.append(this.template({record: record}));
                $('#'+record.id).click(function(){
                    contacts.sandbox.emit('show.details',record);
                })
            }
        });
        return contactItemView;
    });

