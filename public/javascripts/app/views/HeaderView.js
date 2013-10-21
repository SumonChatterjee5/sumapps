define(function(require) {
    var Backbone = require('backbone'),
        _= require('underscore'),
        Marionette = require('marionette'),


        template = _.template(require('text!./templates/header.html'));

    return Backbone.Marionette.ItemView.extend({
        events: {

        },

        initialize: function(el) {
            _.bindAll(this);
        },

        render: function(el) {
            this.$el.html(template());
            return this;
        }



    });
});