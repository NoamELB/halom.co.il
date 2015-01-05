/*===========================================================================
** Width Controller handles the Size of the screen and checks every 0.5s
** if the screen is small or not.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('headerController', [])
	.controller('HeaderController', ['$scope', 'Head', function($scope, Head) {
		$scope.Head = Head;
	}]);
})(angular);