/**
 * Created by supriyag on 26-08-2014.
 */
define(["contacts.core","text!./templates/contact.list.html","./collection/contact.details","./model/contact.details","./view/contact.list","./view/contact.details.modal"],
    function(contacts,contactListTpl,contactCollection,contactModel,contactView,contactDetail){
           return {

               template : _.template(contactListTpl),

               initialize : function(options){
                   var self = this;
                   console.log('i am initialized');
                   this.options = options || {};
                   this.contactCollection = new contactCollection();
                   this.contactCollection.fetch({
                       success: function (r) {
                           _.each(r.models, function (resultItem) {
                               // create each view
                               self.createContactRow(resultItem.attributes)

                           });
                       }
                   });
                   this.render();
                   this.sandbox.on('show.details',this.openModal)
               },
               render: function () {
                   this.html(this.template());
               },
               createContactRow : function(record){
                   // create view
                   var myRecord = new contactView({
                       parentEl: this.sandbox.dom.find('#contact-body'),
                       item: record
                   });
               },
               openModal : function(payload){
                   console.log('open modal',payload);
                   // create modal view
                   var myModal = new contactDetail({
                       parentEl: this.sandbox.dom.find('#contact-details-modal'),
                       index : payload
                   });
                   contacts.sandbox.$('#contact-details-modal').modal('show');
               }
           }
    }

);