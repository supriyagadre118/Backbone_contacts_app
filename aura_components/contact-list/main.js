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
                _.bindAll(this,'render','showDetails','redirectTo');
                var self = this;
                this.sandbox.on('show.details',this.showDetails);
                // fetch from collection
                this.contactsCollection = new contactsCollection();
                this.contactsCollection.fetch({
                    success: function (r) {
                        self.createContactItem(r.models[0].attributes.details);
                    }
                });
                this.sandbox.on('route:home', function (payload) {
                    console.log(payload);
                    contacts.sandbox.router.navigate(payload.route, {trigger: true});
                    // contacts.sandbox.emit('show.signin.popover');
                });
                this.render();
//                var initializeRouter = new Router({headerString : 'initializeRouter'});
//                this.sandbox.on('route:home',this.redirectTo);

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
                var myModal = new contactDetailsModalView({
                    parentEl: this.sandbox.dom.find('.modal-body'),
                    record : payload
                });
                contacts.sandbox.$('.modal').modal('show');
            },
            redirectTo : function(){
                console.log('redirected to home')
            }
        }
    });