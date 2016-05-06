(function(count) {

	var app = angular.module('cv-sections', []);

	// ------- cv-menu DIRECTIVE
	app.directive('cvMenu', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-menu.html'
        };
    });
	
    // ------- cv-personalinfo DIRECTIVE
    app.directive('cvInfo', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-info.html'
        };
    });

    // ------- cv-summary DIRECTIVE
    app.directive('cvSummary', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-summary.html',
        };
    });

    // ------- cv-experiences DIRECTIVE
    app.directive('cvExperiences', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-experiences.html',
        };
    });

    // ------- cv-projects DIRECTIVE
    app.directive('cvProjects', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-projects.html',
        };
    });

    // ------- cv-languages DIRECTIVE
    app.directive('cvLanguages', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-languages.html',
        };
    });

    // ------- cv-skills DIRECTIVE
    app.directive('cvSkills', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-skills.html',
        };
    });

    // ------- cv-education DIRECTIVE
    app.directive('cvEducation', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-education.html',
        };
    });

    // ------- cv-social-contacts DIRECTIVE
    app.directive('cvSocialContacts', function() {
        return {
            restrict: 'E',
            templateUrl: 'cv-social-contacts.html'
        };
    });

})();