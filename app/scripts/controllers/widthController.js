/*===========================================================================
** Width Controller handles the Size of the screen and checks every 0.5s
** if the screen is small or not.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('widthController', [])
	.controller('WidthController', ['$scope', '$window', '$interval', function($scope, $window, $interval) {

		var widthForSmall = '850'; // minimum computer display
		$scope.isSmall = $window.innerWidth < widthForSmall;

		// watch width in order to switch between phone and computer display
		$interval(function() {
			$scope.isSmall = ($window.innerWidth < widthForSmall);
		}, 500);

		var hour = (new Date()).getHours();
		$scope.isDay = (hour < 20 && hour >= 8);
		$scope.toggleDay = function() {
			$scope.isDay = !$scope.isDay;
		};

	}]);
})(angular);