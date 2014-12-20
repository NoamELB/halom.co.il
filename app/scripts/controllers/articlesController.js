/*===========================================================================
** Articles controller gets the articles from $parent and then from JSON.
** Deals with the home-made accordion, which decides when to open and when
**  to close the collapses.
** The result is:
**					★¸.•´¯`★¸¸.•´¯`★¸¸.•★¸¸.•
**					★¸.•´¯`░╦╗╔╗╔╗╔╗░¸.•★¸¸.•
**					★¸.•´¯`░╠╣║║╚╗╚╗░¸.•★¸¸.•
**					★¸.•´¯`░╩╝╚╝╚╝╚╝░¸.•★¸¸.•
**					★¸.•´¯`★¸¸.•´¯`★¸¸.•★¸¸.•
*===========================================================================*/    
(function(angular){
	'use strict';
	angular.module('articlesController', [])
	.controller('ArticlesController', ['$scope', '$http', '$timeout', '$routeParams', function($scope, $http, $timeout, $routeParams) {
		$scope.articles = $scope.data; // gets data from father scope - Main
		var delay = false; // delay between opening collapses
		var current = -1; // currently open collapse
 		
 		/* get data again, both to reset last visit value, and 
 			to make sure it's here, in case gets here before $parent gets data */
		$http.get('articles.json').success(function(data){
			$scope.articles = data;				
			
			if ($routeParams.toOpen >= 0) { // decides which collapse to open upon load. default is -1 to open none
				$timeout(function() { 
					$scope.toggle($routeParams.toOpen); 
				}, 1000);
			}
		});

		/* decides whether to open an article, close and then open, or just close */
		$scope.toggle = function(index) {
			if (current === -1) { // if nothing is open, simply open
				openArticle(index);
				return;
			}
			if (delay) // make sure only one opens at a time
				return;
			$scope.articles[current].isOpen = false; // close current article
			if (current === index) { // if clicked on current article, simply close
				current = -1;
				return;
			}
			delay = true;

			$timeout(function() { // clicked on different article. close and open after 1s
				openArticle(index);
			}, 1000);
		};
		/* opens one article, given its index */
		var openArticle = function(index) {
				console.log(index);
				$scope.articles[index].isOpen = true;
				current = index;
				delay = false;
		};

	}]);
})(angular);