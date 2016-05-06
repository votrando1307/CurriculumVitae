(function() {
    var app = angular.module('cv', ['cv-sections']);
	
	app.controller('CurriculumCtrl', ['$scope', '$http', '$log', '$filter',
        function($scope, $http, $log, $filter) {

            var cv = this;
            cv.informations = {};

            $http.get('cv-data.json')
            .success(function(data) {
                cv.informations = data;

                var orderBy = $filter('orderBy');
                var orderedExperiences = [];

                orderedExperiences = orderBy(cv.informations.experiences, '-to_date');
                cv.position = orderedExperiences[0].job_position;
                cv.current_company_name = orderedExperiences[0].company.name;
            })
            .error(function(data, status, headers, config) {
                $log.error(status);
            });
			
			//// Edit Information
			// Edit Name
			cv.infoName_editorEnabled = false;
			cv.infoName_enableEditor = function() {
				cv.infoName_editorEnabled = true;
				cv.infoName_editableTitle = cv.informations.personal_informations.name;
			};
			cv.infoName_disableEditor = function() {
				cv.infoName_editorEnabled = false;
			};  
			cv.infoName_save = function() {
				cv.informations.personal_informations.name = cv.infoName_editableTitle;
				cv.infoName_disableEditor();
			};
					
			// Edit Current
			cv.infoCurrent_editorEnabled = false;
			cv.infoCurrent_enableEditor = function() {
				cv.infoCurrent_editorEnabled = true;
				cv.infoCurrent_editableTitle = cv.informations.personal_informations.current;
			};
			cv.infoCurrent_disableEditor = function() {
				cv.infoCurrent_editorEnabled = false;
			};  
			cv.infoCurrent_save = function() {
				cv.informations.personal_informations.name = cv.infoCurrent_editableTitle;
				cv.infoCurrent_disableEditor();
			};		
					
			// Edit Company
			cv.infoCompany_editorEnabled = false;
			cv.infoCompany_enableEditor = function() {
				cv.infoCompany_editorEnabled = true;
				cv.infoCompany_editableTitle = cv.informations.personal_informations.company;
			};
			cv.infoCompany_disableEditor = function() {
				cv.infoCompany_editorEnabled = false;
			};  
			cv.infoCompany_save = function() {
				cv.informations.personal_informations.company = cv.infoCompany_editableTitle;
				cv.infoCompany_disableEditor();
			};				
				
			// Edit PhoneNumber
			cv.infoPhoneNumber_editorEnabled = false;
			cv.infoPhoneNumber_enableEditor = function() {
				cv.infoPhoneNumber_editorEnabled = true;
				cv.infoPhoneNumber_editableTitle = cv.informations.personal_informations.phone_number;
			};
			cv.infoPhoneNumber_disableEditor = function() {
				cv.infoPhoneNumber_editorEnabled = false;
			};  
			cv.infoPhoneNumber_save = function() {
				cv.informations.personal_informations.phone_number = cv.infoPhoneNumber_editableTitle;
				cv.infoPhoneNumber_disableEditor();
			};		
					
			// Edit Email
			cv.infoEmailt_editorEnabled = false;
			cv.infoEmail_enableEditor = function() {
				cv.infoEmail_editorEnabled = true;
				cv.infoEmail_editableTitle = cv.informations.personal_informations.email;
			};
			cv.infoEmail_disableEditor = function() {
				cv.infoEmail_editorEnabled = false;
			};  
			cv.infoEmail_save = function() {
				cv.informations.personal_informations.email = cv.infoEmail_editableTitle;
				cv.infoEmail_disableEditor();
			};				
					
			// Edit Career
			cv.infoCareer_editorEnabled = false;
			cv.infoCareer_enableEditor = function() {
				cv.infoCareer_editorEnabled = true;
				cv.infoCareer_editableTitle = cv.informations.personal_informations.career;
			};
			cv.infoCareer_disableEditor = function() {
				cv.infoCareer_editorEnabled = false;
			};
			cv.infoCareer_save = function() {
				cv.informations.personal_informations.career = cv.infoCareer_editableTitle;
				cv.infoCareer_disableEditor();
			};		
					
			// Edit National
			cv.infoNational_editorEnabled = false;
			cv.infoNational_enableEditor = function() {
				cv.infoNational_editorEnabled = true;
				cv.infoNational_editableTitle = cv.informations.personal_informations.national;
			};
			cv.infoNational_disableEditor = function() {
				cv.infoNational_editorEnabled = false;
			};
			cv.infoNational_save = function() {
				cv.informations.personal_informations.national = cv.infoNational_editableTitle;
				cv.infoNational_disableEditor();
			};
				
			//// Edit Summary
			cv.summary_editorEnabled = false;
			cv.summary_enableEditor = function() {
				cv.summary_editorEnabled = true;
				cv.summary_editableTitle = cv.informations.summary;
			};
			cv.summary_disableEditor = function() {
				cv.summary_editorEnabled = false;
			};
			cv.summary_save = function() {
				cv.informations.summary = cv.summary_editableTitle;
				cv.summary_disableEditor();
			};
			
			//// Edit Experience
			// Edit Job
			cv.expJob_editorEnabled = false;
			cv.expJob_enableEditor = function(obj) {
				cv.expJob_editorEnabled = true;
				cv.expJob_editableTitle = obj;
			};
			cv.expJob_disableEditor = function() {
				cv.expJob_editorEnabled = false;
			};
			cv.expJob_save = function(obj) {
				obj.job = cv.expJob_editableTitle;
				cv.expJob_disableEditor();
			};
			
			// Edit School
			cv.expSchool_editorEnabled = false;
			cv.expLocation_editorEnabled = false;
			cv.expSchool_enableEditor = function(obj) {
				cv.expSchool_editorEnabled = true;
				cv.expLocation_editorEnabled = true;
				cv.expSchool_editableTitle = obj.name;
				cv.expLocation_editableTitle = obj.location;
			};
			cv.expSchool_disableEditor = function() {
				cv.expSchool_editorEnabled = false;
				cv.expLocation_editorEnabled = true;
			};
			cv.expSchool_save = function(obj) {
				obj.name = cv.expSchool_editableTitle;
				obj.location = cv.expLocation_editableTitle;
				cv.expSchool_disableEditor();
			};
			
			// Edit School Detail
			cv.expSchoolDetail_editorEnabled = false;
			cv.expDateFrom_editorEnabled = false;
			cv.expDateTo_editorEnabled = false;
			cv.expSchoolDetail_enableEditor = function(obj) {
				cv.expSchoolDetail_editorEnabled = true;
				cv.expDateFrom_editorEnabled = true;
				cv.expDateTo_editorEnabled = true;
				cv.expSchoolDetail_editableTitle = obj.job_description;
				cv.expDateFrom_editableTitle = obj.from_date;
				cv.expDateTo_editableTitle = obj.to_date;
			};
			cv.expSchoolDetail_disableEditor = function() {
				cv.expSchoolDetail_editorEnabled = false;
				cv.expDateFrom_editorEnabled = false;
				cv.expDateTo_editorEnabled = false;
			};
			cv.expSchoolDetail_save = function(obj) {
				obj.job_description = cv.expSchoolDetail_editableTitle;
				obj.from_date = cv.expDateFrom_editableTitle;
				obj.to_date = cv.expDateTo_editableTitle;
				cv.expSchoolDetail_disableEditor();
			};
			
			//// Edit Projects
			// Edit Name
			cv.prjName_editorEnabled = false;
			cv.prjName_enableEditor = function(obj) {
				cv.prjName_editorEnabled = true;
				cv.prjName_editableTitle = obj;
			};
			cv.prjName_disableEditor = function() {
				cv.prjName_editorEnabled = false;
			};
			cv.prjName_save = function(obj) {
				obj.name = cv.prjName_editableTitle;
				cv.prjName_disableEditor();
			};
			
			// Edit Detail
			cv.prjDetail_editorEnabled = false;
			cv.prjDetail_enableEditor = function(obj) {
				cv.prjDetail_editorEnabled = true;
				cv.prjDetail_editableTitle = obj;
			};
			cv.prjDetail_disableEditor = function() {
				cv.prjDetail_editorEnabled = false;
			};
			cv.prjDetail_save = function(obj) {
				obj.description = cv.prjDetail_editableTitle;
				cv.prjDetail_disableEditor();
			};
			
			//// Edit Education
			// Edit Name and Place
			cv.eduSchool_editorEnabled = false;
			cv.eduLocation_editorEnabled = false;
			cv.eduSchool_enableEditor = function(obj) {
				cv.eduSchool_editorEnabled = true;
				cv.eduLocation_editorEnabled = true;
				cv.eduSchool_editableTitle = obj.school_name;
				cv.eduLocation_editableTitle = obj.place;
			};
			cv.eduSchool_disableEditor = function() {
				cv.eduSchool_editorEnabled = false;
				cv.eduLocation_editorEnabled = false;
			};
			cv.eduSchool_save = function(obj) {
				obj.school_name = cv.eduSchool_editableTitle;
				obj.place = cv.eduLocation_editableTitle;
				cv.eduSchool_disableEditor();
			};
			
			// Edit Detail
			cv.eduDetail_editorEnabled = false;
			cv.eduDetail_enableEditor = function(obj) {
				cv.eduDetail_editorEnabled = true;
				cv.eduDetail_editableTitle = obj.field_of_study;
			};
			cv.eduDetail_disableEditor = function() {
				cv.eduDetail_editorEnabled = false;
			};
			cv.eduDetail_save = function(obj) {
				obj.field_of_study = cv.eduDetail_editableTitle;
				cv.eduDetail_disableEditor();
			};
			
			// Edit Date
			cv.eduDateFrom_editorEnabled = false;
			cv.eduDateTo_editorEnabled = false;
			cv.eduDateFrom_enableEditor = function(obj) {
				cv.eduDateFrom_editorEnabled = true;
				cv.eduDateTo_editorEnabled = true;
				cv.eduDateFrom_editableTitle = obj.fromyear;
				cv.eduDateTo_editableTitle = obj.toyear;
			};
			cv.eduDateFrom_disableEditor = function() {
				cv.eduDateFrom_editorEnabled = false;
				cv.eduDateTo_editorEnabled = false;
			};
			cv.eduDateFrom_save = function(obj) {
				obj.fromyear = cv.eduDateFrom_editableTitle;
				obj.toyear = cv.eduDateTo_editableTitle;
				cv.eduDateFrom_disableEditor();
			};
			
			//// Add Education
			cv.ExpJob_AddEnabled = false;
			cv.ExpSchool_AddEnabled = false;
			cv.ExpLocation_AddEnabled = false;
			cv.ExpFromYear_AddEnabled = false;
			cv.ExpToYear_AddEnabled = false;
			cv.ExpDetail_AddEnabled = false;
			cv.ExpJob_AddEnable = function() {
				cv.ExpJob_AddEnabled = true;
				cv.ExpSchool_AddEnabled = true;
				cv.ExpLocation_AddEnabled = true;
				cv.ExpFromYear_AddEnabled = true;
				cv.ExpToYear_AddEnabled = true;
				cv.ExpDetail_AddEnabled = true;
			};
			cv.ExpJob_AddDisable = function() {
				cv.ExpJob_AddEnabled = false;
				cv.ExpSchool_AddEnabled = false;
				cv.ExpLocation_AddEnabled = false;
				cv.ExpFromYear_AddEnabled = false;
				cv.ExpToYear_AddEnabled = false;
				cv.ExpDetail_AddEnabled = false;
			};
			cv.ExpJob_AddSave = function() {
				if (cv.ExpJob_AddTitle == "")
					return;
				data = {
					'job': cv.ExpJob_AddTitle,
					'company': {
						'location': cv.ExpSchool_AddTitle,
						'name': cv.ExpLocation_AddTitle
					},
					'from_date': cv.ExpFromYear_AddTitle,
					'to_date': cv.ExpToYear_AddTitle,
					'job_description': cv.ExpDetail_AddTitle
				};
				cv.informations.experiences.push(data);
				
				cv.ExpJob_AddTitle = "";
				cv.ExpSchool_AddTitle = "";
				cv.ExpLocation_AddTitle = "";
				cv.ExpFromYear_AddTitle = "";
				cv.ExpToYear_AddTitle = "";
				cv.ExpDetail_AddTitle = "";
			};
			
			//// Add Project
			cv.PrjName_AddEnabled = false;
			cv.PrjDetail_AddEnabled = false;
			cv.PrjName_AddEnable = function() {
				cv.PrjName_AddEnabled = true;
				cv.PrjDetail_AddEnabled = true;
			};
			cv.PrjName_AddDisable = function() {
				cv.PrjName_AddEnabled = false;
				cv.PrjDetail_AddEnabled = false;
			};
			cv.PrjName_AddSave = function() {
				if (cv.PrjName_AddTitle == "")
					return;
				data = {
					'description': cv.PrjDetail_AddTitle,
					'name': cv.PrjName_AddTitle
				};
				cv.informations.projects.push(data);
				
				cv.PrjName_AddTitle = "";
				cv.PrjDetail_AddTitle = "";
			};
			
			cv.EduSchool_AddEnabled = false;
			cv.EduLocation_AddEnabled = false;
			cv.EduDetail_AddEnabled = false;
			cv.EduFromYear_AddEnabled = false;
			cv.EduToYear_AddEnabled = false;
			cv.EduSchool_AddEnable = function() {
				cv.EduSchool_AddEnabled = true;
				cv.EduLocation_AddEnabled = true;
				cv.EduDetail_AddEnabled = true;
				cv.EduFromYear_AddEnabled = true;
				cv.EduToYear_AddEnabled = true;
			};
			cv.EduSchool_AddDisable = function() {
				cv.EduSchool_AddEnabled = false;
				cv.EduLocation_AddEnabled = false;
				cv.EduDetail_AddEnabled = false;
				cv.EduFromYear_AddEnabled = false;
				cv.EduToYear_AddEnabled = false;
			};
			cv.EduSchool_AddSave = function() {
				if (cv.EduSchool_AddTitle == "")
					return;
				data = {
					'school_name': cv.EduSchool_AddTitle,
					'place': cv.EduLocation_AddTitle,
					'field_of_study': cv.EduDetail_AddTitle,
					'fromyear': cv.EduFromYear_AddTitle,
					'toyear': cv.EduToYear_AddTitle
				};
				cv.informations.education.push(data);
				
				cv.EduSchool_AddTitle = "";
				cv.EduLocation_AddTitle = "";
				cv.EduDetail_AddTitle = "";
				cv.EduFromYear_AddTitle = "";
				cv.ExpToYear_AddTitle = "";
				cv.EduToYear_AddTitle = "";
			};
        }
    ]);

})();