define(function(require) {
    var Backbone = require('backbone'),
        Member = require('./Requirement');

    return Backbone.Collection.extend({
        model : Requirement
    });
});