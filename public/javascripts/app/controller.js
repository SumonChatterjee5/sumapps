define(function (require) {

    var $ = require('jquery'),
        _ = require('underscore'),
        Bootstrap = require('bootstrap'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        app = require('app');

    var Views = {
		RequirementView:require('views/RequirementView'),

        HeaderView:require('views/HeaderView')

    };

