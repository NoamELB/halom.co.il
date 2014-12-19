/* ==========================================================================
	Main Controller
   =========================================================================*/
(function(angular){
	'use strict';
	angular.module('mainController', [])
	.controller('MainController', ['$scope', '$http', '$timeout', '$modal', function ($scope, $http, $timeout, $modal) {
		$scope.data = [];

		$http.get('articles.json').success(function(data){
			$scope.data = data;
			//angular.forEach($scope.articles, function(article){
				//$scope.articles[0].text+='<div class="fb-comments" data-href="https://www.facebook.com/halom.co.il" data-width="100%" data-numposts="5" data-colorscheme="dark"></div>';
			//});
		});

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