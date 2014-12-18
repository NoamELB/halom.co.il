/* ==========================================================================
	About Controller 
   =========================================================================*/
(function(angular){
	'use strict';
	angular.module('lucidController', [])
	.controller('LucidController', ['$scope', function($scope) {
		$scope.text=[false, false, false, false];
			$scope.showText = function(x) {
				$scope.text[x]=true;
		};
	}]);
})(angular);