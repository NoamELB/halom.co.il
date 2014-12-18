/* ==========================================================================
	Welcome Controller is responsible for animating the first page.
	First it shows the second line, then it shows the image and at the end,
	 it redirects the user to the first page.
   =========================================================================*/    
(function(angular){
	'use strict';
	angular.module('welcomeController', [])
	.controller('WelcomeController', ['$scope', '$timeout', '$location', function($scope, $timeout, $location) {
	 	// redirect the web to page 1 after x seconds
/*		$timeout(function() {
			console.log($location.path());
			if ($location.path() == '/')
				$location.path('/book1');
		}, 5000);*/
	}]);
})(angular);