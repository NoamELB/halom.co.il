/*▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬ Main module of the app.	  ▬▬
▬▬ Collects all the modules,  ▬▬
▬▬ creates a filter & configs ▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬*/
(function(angular) {
	'use strict';
	angular.module('myApp', [
		'ngRoute',
		'siteControllers',
		'siteTitlebar',
		'siteFooterbar'
	])	
	/* convert the string to html format */
	.filter('strToHtml', ['$sce', function($sce) { 
	    return function(string) {
	        return $sce.trustAsHtml(string);
	    };
	}])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'partials/welcome.html'
		})
		.when('/lucid', {
			templateUrl: 'partials/lucid.html',
			controller: 'LucidController'
		})
		.when('/articles/:toOpen', {
			templateUrl: 'partials/articles.html',
			controller: 'ArticlesController'
		})
		.when('/dreamv', {
			templateUrl: 'partials/dreamvbook.html'
		})
		.otherwise({
			redirectTo: '/' // default page
		});
	}]);
})(angular);