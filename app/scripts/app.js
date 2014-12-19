(function(angular) {
	'use strict';
	angular.module('myApp', [
		'ngRoute',
		'siteControllers' // controllers
	]).directive('titleBar', function() { // makes the entire title-bar in another HTML template
	    return {
		  	restrict: 'E',
		  	templateUrl: 'partials/title-bar.html'
	    };
	}).directive('footerBar', function() { // makes the entire footer-bar in another HTML template
	    return {
		  	restrict: 'E',
		  	templateUrl: 'partials/footer-bar.html',
		  	controller: 'FooterController'
	    };
	}).config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'partials/welcome.html',
			controller: 'WelcomeController'
		})
		.when('/lucid', {
			templateUrl: 'partials/lucid.html',
			controller: 'LucidController'
		})
		.when('/articles', {
			templateUrl: 'partials/articles.html',
			controller: 'ArticlesController'
		})
		.otherwise({
			redirectTo: '/' // default page
		});
	}]);
})(angular);