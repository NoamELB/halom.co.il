/* ==========================================================================
	Main Controller
   =========================================================================*/
(function(angular){
	'use strict';
	angular.module('mainController', [])
	.controller('MainController', ['$scope', '$timeout', function ($scope, $timeout) {
		$scope.loadDelay = false;

		$timeout(function() {
			$scope.loadDelay = true;
		}, 100);
	}]);
})(angular);