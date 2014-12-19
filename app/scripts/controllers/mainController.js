/* ==========================================================================
	Main Controller
   =========================================================================*/
(function(angular){
	'use strict';
	angular.module('mainController', [])
	.controller('MainController', ['$scope', '$timeout', '$modal', function ($scope, $timeout, $modal) {
		$scope.loadDelay = false;	

		$timeout(function() {
			$scope.loadDelay = true;
		}, 100);
		

		$scope.lucidModal = function() {
			$modal.open({
	    		templateUrl: 'partials/modals/reality-check.html',
	    		size: 'sm'
	    	}).result.then(function () {}, function() {
				$timeout(function() { // call function again
					$scope.lucidModal();
				}, 60000 * Math.random() + 60000); // 1-2 minutes		    	
		    });
		};
		$timeout(function() { // start reality check after 30s
			$scope.lucidModal();
		}, 30000);



	}]);
})(angular);