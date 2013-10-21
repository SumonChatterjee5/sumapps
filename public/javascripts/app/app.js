define(function (require) {

    var $ = require('jquery'),
        _ = require('underscore'),
        Bootstrap = require('bootstrap'),
        Backbone = require('backbone'),
        Marionette = require('marionette');

    var App = new Marionette.Application();

    var Views = null;



    App.addRegions({
        appHeader: "#app-header",
        appBody: "#app-body"
    });

    App.on("initialize:before", function () {



    });

    App.on("initialize:after", function () {

        Backbone.history.start({ pushState: true });



    });



    App.addInitializer(function() {



        Views = {
            RequirementView:require('./views/RequirementView'),
            HeaderView:require('./views/HeaderView')
        };

        var plainHeaderView = new Views.HeaderView({});
        var requirementView = new Views.RequirementView({});

        app.appHeader.show(plainHeaderView);
        app.appBody.show(requirementView);




    });

    return App;

});

