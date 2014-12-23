/*===========================================================================
** Main controller opens a modal after 30s.
** If the modal was 'Closed', which happens only if clicked on "don't bother",
**  then modal's promise will return done, and nothing will happen.
** If the modal was 'Dismissed', which happens any other way it is closed,
**  the modal's promise will return fail, and it will call the function
**  again after 2-3m.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('mainController', [])
	.controller('MainController', ['$timeout', '$modal', '$location', function ($timeout, $modal, $location) {

		/* pops up a modal every 2-3m,
		   stops once pressed on 'dont bother' button. */
		var lucidModal = function() {
			$modal.open({
	    		templateUrl: 'partials/modals/reality-check.html',
	    		size: 'sm'
	    	}).result.then(function () {}, function(result) {
	    		if (result === 'check')
	    			$modal.open({
	    				templateUrl: 'partials/modals/check.html',
	    				controller: 'CheckController',
	    				size: 'sm'
	    			});
	    		else if (result === 'goToArticle') {
	    			$location.path('/articles/2');
	    		}
				$timeout(function() { // call function again
					lucidModal();
				}, 300000 * Math.random() + 180000); // 3-8 minutes		    	
		    });
		};

		/* start reality check after 60s */
		$timeout(function() { 
			lucidModal();
		}, 60000);
	}]);
})(angular);