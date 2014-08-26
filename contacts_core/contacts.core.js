/**
 * Created by supriyag on 26-08-2014.
 */
define(['bower_components/aura/lib/aura', 'backbone.ext', 'jquery.ext', 'config'],
    function (Aura, BackboneExt,  jQueryExt, config) {

        var app = new Aura({
            debug: true, logEvents: true
        });
        app.use(BackboneExt).use(jQueryExt).use(config);
        return app;
        /*aura object*/
    });