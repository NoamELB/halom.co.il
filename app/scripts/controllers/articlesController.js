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
	.controller('ArticlesController', ['$scope', 'ArticlesList', '$timeout', '$routeParams', '$location', 'Head', function($scope, ArticlesList, $timeout, $routeParams, $location, Head) {
		$scope.articles = []; // gets data from father scope - Main
		var delay = false; // delay between opening collapses
		var current = -1;//$routeParams.toOpen; // currently open collapse
		var menuMetas = ["menutitle", "menudes", "menukeywords"];
		var titles = ["0t","1t","2t","3t","4t","5t","6t","7t","8t","9t","10t"];
		var des = ["d0t","d1t","d2t","d3t","d4t","d5t","d6t","d7t","d8t","d9t","d10t"];
		var key = ["k0t","k1t","k2t","k3t","k4t","k5t","k6t","k7t","k8t","k9t","k10t"]
 		
 		/* gets data from service */
		ArticlesList.success(function(data){
			$scope.articles = data;				
			angular.forEach($scope.articles, function(article, index) { // initalize all to be closed
				article.isOpen = false;
			});
			
			if ($location.path() === "/articles/menu")
				Head.setHead(menuMetas[0],menuMetas[1],menuMetas[2]);
			else Head.setHead(titles[$location.path().slice(10)], des[$location.path().slice(10)], key[$location.path().slice(10)]);
			/* decides which collapse to open upon load. default is menu to open none */
			$timeout(function() {					
				if ($routeParams.toOpen >= 0 && current < 0) { 				
					$scope.articles[$routeParams.toOpen].isOpen = true;
					current = $routeParams.toOpen; 
				}
			}, 0);
		});

		/* decides whether to open an article, close and then open, or just close */
		$scope.toggle = function(index) {			
			if (current == -1) { // if nothing is open, simply open
				openArticle(index);
				return;
			}
			if (delay) // make sure only one opens at a time
				return;
			$scope.articles[current].isOpen = false; // close current article
			if (current == index) { // if clicked on current article, simply close
				current = -1;
				$location.path('/articles/' + 'menu', false);
				Head.setHead(menuMetas[0],menuMetas[1],menuMetas[2]);
				return;
			}
			delay = true;

			$timeout(function() { // clicked on different article. close and open after 1s
				openArticle(index);
			}, 1000);
		};
		/* opens one article, given its index */
		var openArticle = function(index) {
				$scope.articles[index].isOpen = true;
				current = index;
				$location.path('/articles/' + index, false);
				Head.setHead(titles[$location.path().slice(10)], des[$location.path().slice(10)], key[$location.path().slice(10)]);
				delay = false;
		};

	}])
	/* overloads $location.path to get a 'reload' parameter (boolean),
		true indicates reload, false updates location without a reload */
	.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
	    var original = $location.path;
	    $location.path = function (path, reload) {
	        if (reload === false) {
	            var lastRoute = $route.current;
	            var un = $rootScope.$on('$locationChangeSuccess', function () {
	                $route.current = lastRoute;
	                un();
	            });
	        }
	        return original.apply($location, [path]);
	    };
	}]);
})(angular);