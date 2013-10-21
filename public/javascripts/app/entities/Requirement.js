define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({

        idAttribute: "_id",
        requirementClientId:0,
        requirementClientName:'',
        requirementCompanyName:'',
        requirementEmailid:'',
        requirementContactNumber:'',
        requirementProjectName:'',
        requirementProjectInformation:'',
        requirementSeedURL:'',
        requirementOutputFormat:'',
        requirementDataSchema:'',
        requirementSampleFile:'',
        requirementDataCrawlFrequency:'',
        requirementOtherRequirements:'',


        validate: function(attrs, options) {
        }


    });
});