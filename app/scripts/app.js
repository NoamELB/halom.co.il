(function(angular) {
	'use strict';
	angular.module('myApp', [
		'ngRoute',
		'siteControllers',
		'siteTitlebar',
		'siteFooterbar'
	]).config(['$routeProvider', function ($routeProvider) {
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
		.when('/dreamv', {
			templateUrl: 'partials/dreamvbook.html'
		})
		.otherwise({
			redirectTo: '/' // default page
		});
	}]);
})(angular);