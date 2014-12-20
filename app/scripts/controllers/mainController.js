/*===========================================================================
** Main controller first gets the articles from the JSON data.
** It also opens a modal after 30s.
** If the modal was 'Closed', which happens only if clicked on "don't bother",
**  then modal's promise will return done, and nothing will happen.
** If the modal was 'Dismissed', which happens any other way it is closed,
**  the modal's promise will return fail, and it will call the function
**  again after 2-3m.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('mainController', [])
	.controller('MainController', ['$scope', '$http', '$timeout', '$modal', function ($scope, $http, $timeout, $modal) {
		$scope.data = [];

		/* gets JSON data for child scope - gets it on page-load instead of partial load */
		$http.get('articles.json').success(function(data){ 
			$scope.data = data;
		});

		/* pops up a modal every 2-3m,
		   stops once pressed on 'dont bother' button. */
		$scope.lucidModal = function() {
			$modal.open({
	    		templateUrl: 'partials/modals/reality-check.html',
	    		size: 'sm'
	    	}).result.then(function () {}, function() {
				$timeout(function() { // call function again
					$scope.lucidModal();
				}, 60000 * Math.random() + 120000); // 2-3 minutes		    	
		    });
		};

		/* start reality check after 30s */
		$timeout(function() { 
			$scope.lucidModal();
		}, 30000);
	}]);
})(angular);