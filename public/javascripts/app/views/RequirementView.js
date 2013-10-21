define(function(require) {
    var $= require('jquery'),
        Backbone = require('backbone'),
        _= require('underscore'),
        Marionette = require('marionette'),
        Requirement = require('../entities/Requirement'),
        template = _.template(require('text!./templates/addprojectrequirement.html'));

    var self;

    return Marionette.ItemView.extend({

        events: {
            'click button[data-action=addRequirementAction]': 'addRequirement',
            'click #showRequirementForm': 'showRequirementForm',
            'click #showRequirement': 'showRequirement',
            'click #fileInfo':'fileUploadClick'
        },

        initialize: function(el) {
            _.bindAll(this, 'render');
        },

        render: function(el) {
		    this.$el.html(template());
            self = this;
		    return this;
		 },

        fileUploadClick: function(el) {

            self.fileUpload();

        },

        fileUpload: function() {

            var uploadElement = self.$el.find('#fileInfo');


            var urlPath = '/upload';
            uploadElement.fileupload({
                url: urlPath,
                dataType: 'json',
                done: function (e, data) {


					var fName = '';
					var fSize = '';
					fName = data.files[0].name;
					fSize = data.files[0].size;
					self.$el.find('#sample_file').val(fName);
					self.$el.find('#sample_file_name').append(fName+'<br/>');


                }
            }).prop('disabled', !$.support.fileInput)
                .parent().addClass($.support.fileInput ? undefined : 'disabled');


        },

    	addRequirement: function(el) {
			var clientName = $(this.el).find('input#client_name').val();
			var companyName = $(this.el).find('input#company_name').val();
		    var emailId = $(this.el).find('input#emailid').val();
		    var contactNumber = $(this.el).find('input#contact_number').val();
			var projectName = $(this.el).find('input#project_name').val();
		    var projectInformation = $(this.el).find('input#project_information').val();
		    var seedURL = $(this.el).find('input#seed_url').val();
			var outputFormat = $(this.el).find('#output_format').val();
		    var dataSchema = $(this.el).find('textarea#data_schema').val();
			//var sampleFile = $(this.el).find('input#sample_file').val();
		    var dataCrawlFrequency = $(this.el).find('#data_crawl_frequency').val();
		    var otherRequirements = $(this.el).find('input#other_requirements').val();

			var flag = false;
			var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		    if(clientName.length <= 0){

				flag = false;
				this.$el.find('#error_client_name').show();
			}else{

				this.$el.find('#error_client_name').hide();
			}
			if(companyName.length <= 0){

				flag = false;
				this.$el.find('#error_company_name').show();
			}else{

				this.$el.find('#error_company_name').hide();
			}
			if(emailId.length <= 0){

				flag = false;
				this.$el.find('#error_invalid_email').show();
			}else{

				this.$el.find('#error_invalid_email').hide();
			}

			if(!(emailId.match(/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) != null)){

				flag = false;
				this.$el.find('#error_invalid_email').show();
			}else{

				this.$el.find('#error_invalid_email').hide();
			}

			if(contactNumber.length <= 0){

				flag = false;
				this.$el.find('#error_invalid_contact_number').show();
			}else{

				this.$el.find('#error_invalid_contact_number').hide();
			}
			if(!(contactNumber.match(phoneno))){

				flag = false;
				this.$el.find('#error_invalid_contact_number').show();
			}else{

				this.$el.find('#error_invalid_contact_number').hide();
			}
			if(projectName.length <= 0){

				flag = false;
				this.$el.find('#error_project_name').show();
			}else{

				this.$el.find('#error_project_name').hide();
			}
			if(projectInformation.length <= 0){

				flag = false;
				this.$el.find('#error_project_information').show();
			}else{

				this.$el.find('#error_project_information').hide();
			}
			if(seedURL.length <= 0){

				flag = false;
				this.$el.find('#error_seed_url').show();
			}else{

				this.$el.find('#error_seed_url').hide();
			}
			if(outputFormat.length <= 0){

				flag = false;
				this.$el.find('#error_data_output_format').show();
			}else{

				this.$el.find('#error_data_output_format').hide();
			}
			if(dataSchema.length <= 0){

				flag = false;
				this.$el.find('#error_data_schema').show();
			}else{

				this.$el.find('#error_data_schema').hide();
			}
			if(dataCrawlFrequency.length <= 0){


				this.$el.find('#error_data_crawl_frequency').show();
			}else{

				this.$el.find('#error_data_crawl_frequency').hide();
			}
			if(otherRequirements.length <= 0){

				flag = false;
				this.$el.find('#error_other_requirements').show();
			}else{

				this.$el.find('#error_other_requirements').hide();
			}
			var requirement = new Requirement();
			if(clientName.length > 0 && companyName.length > 0 && emailId.length > 0
                && emailId.match(/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) != null
                && contactNumber.length > 0 && contactNumber.match(phoneno) && projectName.length > 0
                && projectInformation.length > 0 && seedURL.length > 0 && outputFormat.length > 0 && dataSchema.length > 0
                && dataCrawlFrequency.length > 0 && otherRequirements.length > 0){
				flag = true;
				if(flag==true){

						this.$el.find('#adding').html('Adding...').show();
						this.$el.find('#loadimg').show();

						requirement.set("requirementClientName", clientName);
						requirement.set("requirementCompanyName", companyName);
						requirement.set("requirementEmailid", emailId);
						requirement.set("requirementContactNumber", contactNumber);
						requirement.set("requirementProjectName", projectName);
						requirement.set("requirementProjectInformation", projectInformation);
						requirement.set("requirementSeedURL", seedURL);
						requirement.set("requirementOutputFormat", outputFormat);
						requirement.set("requirementDataSchema", dataSchema);
						//requirement.set("requirementSampleFile", sampleFile);
						requirement.set("requirementDataCrawlFrequency", dataCrawlFrequency);
						requirement.set("requirementOtherRequirements", otherRequirements);

						requirement.url='/requirement/save';
						requirement.save({},
						{
						    success:function(model, response, options) {





							}

		             	});

		             	this.$el.find('#adding').hide();
						this.$el.find('#loadimg').hide();
						this.$el.find('#success-added').show();
						this.$el.find('#added').html('Your requirement has been added. We will contact you as soon as possible.').show();



					}
				}
		},

        showFileName: function(el) {
            alert(this.$el.find('#fileInfo').val());
            if(this.$el.find('#fileInfo').val() != null){
                this.$el.find('#sample_file').val(this.$el.find('#fileInfo').val());
                this.$el.find('#sample_file').text(this.$el.find('#fileInfo').val());
            }
        },

		showRequirementForm: function(el) {


					this.$el.find('#body-show-requirement').hide();
					this.$el.find('#body-requirement').show();


		},

		showRequirement: function(el) {


					this.$el.find('#body-requirement').hide();
					this.$el.find('#body-show-requirement').show();
					this.$el.find('#loadimgall').show();
					this.$el.find('#showReq').html("<div class='row-fluid'><div class='span1'></div><div class='span2'><legend class='l-header'>Client Name</legend></div><div class='span3'><legend class='l-header'>Company Name</legend></div><div class='span2'><legend class='l-header'>Project Name</legend></div><div class='span4'><legend class='l-header'>Project Information</legend></div></div>");



					var self=this;
					var requirements = [];
					var count = 0;
					var requirement = new Requirement();
					requirement.url='/requirement/show';
					requirement.fetch({

						success: function(model, response, options) {

							self.$el.find('#loadimgall').hide();
							var responseArray = response.data;


							if(responseArray) {
								for(var requirementCount=0; requirementCount<responseArray.length; requirementCount++){

								    count++;
									requirement.set("_id", responseArray[requirementCount].reqpcId);
							        requirement.set("requirementClientName", responseArray[requirementCount].reqpcClientName);
									requirement.set("requirementCompanyName", responseArray[requirementCount].reqpcCompanyName);
									requirement.set("requirementEmailid", responseArray[requirementCount].reqpcEmailId);
									requirement.set("requirementContactNumber", responseArray[requirementCount].reqpcContactNumber);
									requirement.set("requirementProjectName", responseArray[requirementCount].reqpcProjectName);
									requirement.set("requirementProjectInformation", responseArray[requirementCount].reqpcProjectInformation);
									requirement.set("requirementSeedURL", responseArray[requirementCount].reqpcSeedURL);
									requirement.set("requirementOutputFormat", responseArray[requirementCount].reqpcOutputFormat);
									requirement.set("requirementDataSchema", responseArray[requirementCount].reqpcDataSchema);
									requirement.set("requirementSampleFile", responseArray[requirementCount].reqpcSampleFile);
									requirement.set("requirementDataCrawlFrequency", responseArray[requirementCount].reqpcDataCrawlFrequency);
									requirement.set("requirementOtherRequirements", responseArray[requirementCount].reqpcOtherRequirements);


							        requirements.push(requirement);


									var client_name = '';
									var company_name = '';
									var project_name = '';
									var project_info = '';



									client_name = responseArray[requirementCount].reqpcClientName;
									company_name = responseArray[requirementCount].reqpcCompanyName;
									project_name = responseArray[requirementCount].reqpcProjectName;
									project_info = responseArray[requirementCount].reqpcProjectInformation;



									self.$el.find('#adding').hide();
									self.$el.find('#retrieving').hide();
							        self.$el.find('#loadimg').hide();


									if((count%2) != 0){
										self.$el.find('#showReq').append("<div class='row-fluid' id='div-odd'><div class='span1'><label></label></div><div class='span2'><label id='div-wrap-txt' class='lbl-txt'>"+client_name+"</label></div><div class='span3'><label id='div-wrap-txt' class='lbl-txt'>"+company_name+"</label></div><div class='span2'><label id='div-wrap-txt' class='lbl-txt'>"+project_name+"</label></div><div class='span4'><label id='div-wrap-txt' class='lbl-txt'>"+project_info+"</label></div></div>");
										//self.$el.find('#showReq').append("<div class='row-fluid'><div class='span1'></div><div class='span10'><div class='row-fluid' id='div-odd'><div class='span2'><label class='lbl-txt'>"+client_name+"</label></div><div class='span2'><label class='lbl-txt'>"+company_name+"</label></div><div class='span3'><label class='lbl-txt'>"+project_name+"</label></div><div class='span3'><label id='div-wrap-txt' class='lbl-txt'>"+project_info+"</label></div></div><div class='span1'></div></div>");
									}else{
										self.$el.find('#showReq').append("<div class='row-fluid'><div class='span1'><label></label></div><div class='span2'><label id='div-wrap-txt' class='lbl-txt'>"+client_name+"</label></div><div class='span3'><label id='div-wrap-txt' class='lbl-txt'>"+company_name+"</label></div><div class='span2'><label id='div-wrap-txt' class='lbl-txt'>"+project_name+"</label></div><div class='span4'><label id='div-wrap-txt' class='lbl-txt'>"+project_info+"</label></div></div>");
										//self.$el.find('#showReq').append("<div class='row-fluid'><div class='span1'></div><div class='span10'><div class='row-fluid'><div class='span2'><label class='lbl-txt'>"+client_name+"</label></div><div class='span2'><label class='lbl-txt'>"+company_name+"</label></div><div class='span3'><label class='lbl-txt'>"+project_name+"</label></div><div class='span3'><label id='div-wrap-txt' class='lbl-txt'>"+project_info+"</label></div></div><div class='span1'></div></div>");
									}

									client_name = '';
									company_name = '';
									project_name = '';
									project_info = '';


							   }

						}

					},

					error: function(err){
						alert("error");
					}
		     });


		},







    });
});