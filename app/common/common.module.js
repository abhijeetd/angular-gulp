(function(){

    'use strict';

   	/* create the module  */
	var dashApp = angular.module('dashApp', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'smart-table', 'chart.js']);	

	/* configure our routes */
	dashApp.config(function($routeProvider) {
		$routeProvider

			/* route for the home page */
			.when('/', {
				templateUrl : 'app/common/views/home.html'
			})

			/* route for the about page */
			.when('/about', {
				templateUrl : 'app/common/views/about.html',
				controller  : 'aboutController'
			})

			/* route for the contact page */
			.when('/contact', {
				templateUrl : 'app/common/views/contact.html',
				controller  : 'contactController'
			});
	});
	
	

    
}());