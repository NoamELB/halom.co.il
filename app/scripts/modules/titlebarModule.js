/* ==========================================================================
	
   =========================================================================*/
(function(angular){
	'use strict';
	angular.module('siteTitlebar', [])
	.controller('TitlebarController', ['$scope', '$location', function($scope, $location) {
			$scope.isClicked = false;
			$scope.loc = [{"url":"/lucid", "clicked": false},
								{"url":"/articles", "clicked": false},
								{"url":"/dreamv", "clicked": false}
				];
			$scope.$watch(function() {
				return $location.path(); 
			},function(val) {
				angular.forEach($scope.loc, function(loc, index) {
					loc.clicked = (val == loc.url);
				});
			});
	}])
	.directive('titleBar', function() { // makes the entire title-bar in another HTML template
	    return {
		  	restrict: 'E',
		  	templateUrl: 'partials/title-bar.html',
		  	controller: 'TitlebarController'
	    };
	});
})(angular);