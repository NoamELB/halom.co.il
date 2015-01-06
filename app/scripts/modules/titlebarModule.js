/*===========================================================================
** Titlebar module decides which list-item in the titlebar is marked.
** Also opens the modal for 'Forum'.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('siteTitlebar', [])
	.controller('TitlebarController', ['$scope', '$location','$modal', function($scope, $location, $modal) {
			$scope.isClicked = false;
			$scope.loc = [
				{"url":"/lucid/0", "clicked": false},
				{"url":"/articles/menu", "clicked": false},
				{"url":"/dreamv", "clicked": false}
			];

			/* check when URL changes */
			$scope.$watch(function() {
				return $location.path(); 
			},function(val) {
				$scope.isClicked = false; // close nav-bar when redirected
				angular.forEach($scope.loc, function(loc, index) {
					loc.clicked = (val.slice(0,6) == loc.url.slice(0,6)); // gets first 6 letters and compares them
				});
			});

			$scope.openForum = function(){
				$modal.open({
	        		templateUrl: 'partials/modals/forum.html'
	        	});
			};
	}])
	.directive('titleBar', function() { // makes the entire title-bar in another HTML template
	    return {
		  	restrict: 'E',
		  	templateUrl: 'partials/title-bar.html',
		  	controller: 'TitlebarController'
	    };
	});
})(angular);