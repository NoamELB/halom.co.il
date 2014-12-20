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
				{"url":"/lucid", "clicked": false},
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