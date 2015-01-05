/*===========================================================================
** Width Controller handles the Size of the screen and checks every 0.5s
** if the screen is small or not.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('widthController', [])
	.controller('WidthController', ['$scope', '$window', '$interval', function($scope, $window, $interval) {
		$scope.title = "חלום | halom.co.il";
		$scope.metaDescription = "חלום, אתר על חלומות צלולים, הכולל מאמרים על חלומות מודעים ועל השיטות השונות להפוך לרוקם חלומות. Halom, website about lucid dreams in hebrew.";

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