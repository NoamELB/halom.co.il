/*===========================================================================
** Header controller - change meta tags for dream virgin page and landing page
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('headerController', [])
	.controller('HeaderController', ['$scope', 'Head', function($scope, Head) {
		$scope.Head = Head;
	}]);
})(angular);