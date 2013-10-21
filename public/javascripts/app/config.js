require.config({


    deps: [ 'main', 'jquery', 'jquery-ui', 'jquery.tinyscrollbar', 'jquery.ui.widget', 'jquery.iframe-transport', 'jquery.fileupload','bootstrap'],



    paths: {
        'jquery': '/javascripts/lib/jquery/jquery',
        'jquery-ui': '/javascripts/lib/jquery/jquery-ui',
        'jquery.tinyscrollbar': '/javascripts/lib/jquery/jquery.tinyscrollbar.min',
        'jquery.ui.widget': '/javascripts/lib/jquery/jquery.ui.widget',
        'jquery.iframe-transport': '/javascripts/lib/jquery/jquery.iframe-transport',
        'jquery.fileupload': '/javascripts/lib/jquery/jquery.fileupload',
        'bootstrap': '/javascripts/lib/bootstrap/bootstrap.min',
        'json2': '/javascripts/lib/backbone/json2',
        'underscore': '/javascripts/lib/backbone/underscore-min',
        'backbone': '/javascripts/lib/backbone/backbone',
        'marionette' : '/javascripts/lib/backbone/backbone.marionette.min',
        'backbone.wreqr' : '/javascripts/lib/backbone/backbone.wreqr',
        'backbone.babysitter' : '/javascripts/lib/backbone/backbone.babysitter',
        'text': '/javascripts/lib/text'
    },

    shim: {

        'jquery-ui' : {
            deps : ['jquery']
        },

        'jquery.iframe-transport' : {
            deps : ['jquery']
        },

        'jquery.fileupload' : {
            deps : ['jquery', 'jquery.ui.widget']
        },

        backbone: {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        },

        'underscore': {
            exports: '_'
        },

        bootstrap : {
            deps : ['jquery']
        },

        marionette : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        },

        'backbone.wreqr': {
            deps: [ 'backbone' ],
            exports: 'wreqr'
        },

        'backbone.babysitter' : {
            deps: [ 'backbone' ],
            exports: 'wreqr'
        },

        'jquery.tinyscrollbar' : {
            deps : ['jquery']
        }
    }
});


// Set the require.js configuration for your application.
//require.config({
//
//    // Initialize the application with the main application file.'jquery.iframe-transport','jquery.fileupload',
//    deps: [ 'main', 'jquery', 'jquery-ui',  'jquery.tinyscrollbar', 'jquery.ui.widget', 'jquery.iframe-transport', ,'jquery.fileupload', 'bootstrap'],
//
//    paths: {
//        'jquery': '/javascripts/lib/jquery/jquery',
//        'jquery-ui': '/javascripts/lib/jquery/jquery-ui',
//        'jquery.tinyscrollbar': '/javascripts/lib/jquery/jquery.tinyscrollbar.min',
//        'jquery.ui.widget': '/javascripts/lib/jquery/jquery.ui.widget',
//        'jquery.iframe-transport': '/javascripts/lib/jquery/jquery.iframe-transport',
//        'jquery.fileupload': '/javascripts/lib/jquery/jquery.fileupload',
//        'bootstrap': '/javascripts/lib/bootstrap/bootstrap.min',
//        'json2': '/javascripts/lib/backbone/json2',
//        'underscore': '/javascripts/lib/backbone/underscore-min',
//        'backbone': '/javascripts/lib/backbone/backbone',
//        'marionette' : '/javascripts/lib/backbone/backbone.marionette.min',
//        'backbone.wreqr' : '/javascripts/lib/backbone/backbone.wreqr',
//        'backbone.babysitter' : '/javascripts/lib/backbone/backbone.babysitter',
//        'text': '/javascripts/lib/text'
//    },
//
//    shim: {
//
//        'jquery-ui' : {
//            deps : ['jquery']
//        },
//
//        'jquery.iframe-transport' : {
//            deps : ['jquery']
//        },
//
//        'jquery.fileupload' : {
//            deps : ['jquery', 'jquery.ui.widget']
//        },
//        // Backbone library depends on lodash and jQuery.
//        backbone: {
//            deps: [ 'underscore', 'jquery' ],
//            exports: 'Backbone'
//        },
//
//        'underscore': {
//            exports: '_'
//        },
//
//        bootstrap : {
//            deps : ['jquery']
//        },
//
//        marionette : {
//            deps : ['jquery', 'underscore', 'backbone'],
//            exports : 'Marionette'
//        },
//
//        'backbone.wreqr': {
//            deps: [ 'backbone' ],
//            exports: 'wreqr'
//        },
//
//        'backbone.babysitter' : {
//            deps: [ 'backbone' ],
//            exports: 'wreqr'
//        },
//
//        'jquery.tinyscrollbar' : {
//            deps : ['jquery']
//        }
//
//    }
//});
