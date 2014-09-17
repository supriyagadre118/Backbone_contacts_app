/**
 * Created by supriyag on 26-08-2014.
 */
'use strict';
requirejs.config({
    urlArgs : "bust=" +  (new Date()).getTime(),
    paths: {
        /*contacts core*/
        'contacts.core' : 'contacts_core/contacts.core',
        /*Aura extensions*/
        'backbone.ext' : 'extensions/aura.backbone',
        'jquery.ext' : 'extensions/aura.query',
        'config': 'extensions/config',
        /*other libraries*/
        'jquery' : 'bower_components/jquery/jquery.min',
        'bootstrap' : 'bower_components/bootstrap/dist/js/bootstrap.min'
    },
    shim : {
        'bootstrap' : {
            deps : ['jquery'], exports: '$.fn.popover'
        }
    }
});
require(['contacts.core','jquery'],function(contacts,$){
    var start = contacts.start('body').done(function(){
        contacts.sandbox.emit( 'route:home',_.object(['route'],['#/home']) );

    });
});