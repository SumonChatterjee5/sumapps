define(function(require) {

    var $ = require('jquery'),
        _ = require('underscore'),
        Bootstrap = require('bootstrap'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        wreqr = require('backbone.wreqr');


    $(function(){
        app = require('./app');
        app.start();


    });


});