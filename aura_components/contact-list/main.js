/**
 * Created by supriyag on 26-08-2014.
 */

define(['contacts.core','text!./templates/contact.list.wrapper.html','./collection/contacts.collection','./view/contact.item.view','./view/contact.details.modal'],
    function (contacts,contactListWrapperTpl,contactsCollection,contactItemView,contactDetailsModalView) {
        'use strict';
        return {
            template : _.template(contactListWrapperTpl),
            $el : 'main-div',
            initialize : function(options){
                this.options = options || {};
                _.bindAll(this,'render','showDetails');
                var self = this;
                this.sandbox.on('show.details',this.showDetails);
                // fetch from collection
                this.contactsCollection = new contactsCollection();
                this.contactsCollection.fetch({
                    success: function (r) {
                        self.createContactItem(r.models[0].attributes.details);
                    }
                });
                this.render();
            },
            render : function(){
                this.$el.html(this.template());
            },
            createContactItem : function(contactItems){
                var self = this;
                // iterate over this array
                _.each(contactItems,function(item){
                    // create view of this single element
                    self.createItemView(item);
                })
            },
            createItemView : function(contact){
                // create view here
                var contactView = new contactItemView({
                    parentEl : this.sandbox.dom.find('#contact-body'),
                    item : contact
                });
            },
            showDetails : function(payload){
                console.log(payload);

                var myModal = new contactDetailsModalView({
                    parentEl: this.sandbox.dom.find('.modal-body'),
                    record : payload
                });
                contacts.sandbox.$('.modal').modal('show');
            }
        }
    });