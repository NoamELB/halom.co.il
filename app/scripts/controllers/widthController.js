/* ==========================================================================
	Width Controller handles the Size of the screen and determines when 
		it's time to switch to Phone version.
	How it works:
		Whenever the web is resized, the controller will determine if
		 the width is small enough to fit a phone.
   =========================================================================*/
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

	}]);
})(angular);