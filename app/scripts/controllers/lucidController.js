/* ==========================================================================
	About Controller 
   =========================================================================*/
(function(angular){
	'use strict';
	angular.module('lucidController', [])
	.controller('LucidController', ['$scope', '$timeout', function($scope, $timeout) {
		$scope.paragraphs = [
							{display: true}, 
							{display: false},
							{display: false},
							{display: false},
							{display: false},
						];
		
		$scope.showText = function(x) {
			$scope.paragraphs[x-1].display = false;
			$timeout(function() {
				$scope.paragraphs[x].display = true;
			}, 500);			
		};
	}]);
})(angular);