/* ==========================================================================
	Welcome Controller is responsible for animating the first page.
	First it shows the second line, then it shows the image and at the end,
	 it redirects the user to the first page.
   =========================================================================*/    
(function(angular){
	'use strict';
	angular.module('articlesController', [])
	.controller('ArticlesController', ['$scope', '$http', '$sce', '$timeout', function($scope, $http, $sce, $timeout) {
		$scope.articles = [];
		var current = -1;
		var delay = false;


		$http.get('articles.json').success(function(data){
			$scope.articles = data;
			//angular.forEach($scope.articles, function(article){
				$scope.articles[0].text+='<div class="fb-comments" data-href="https://www.facebook.com/halom.co.il" data-width="100%" data-numposts="5" data-colorscheme="dark"></div>';
			//});
		});

		/* convert the string to html format */
		$scope.getHtml = function(unsafeHtml) {
			return $sce.trustAsHtml(unsafeHtml);
		};

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
				$scope.articles[index].isOpen = true;
				current = index;
				delay = false;

		};
	}]);
})(angular);