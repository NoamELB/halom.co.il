/*===========================================================================
** Lucid contoller makes sure only one collapse is shown at the same time.
** The result is:	
**					╭━━╮╭━━━┳━━━┳━━━╮
**					┃╭╮┃┃╭━╮┃╭━╮┃╭━╮┃
**					┃╰╯╰┫┃┃┃┃╰━━┫╰━━╮
**					┃╭━╮┃┃┃┃┣━━╮┣━━╮┃
**					┃╰━╯┃╰━╯┃╰━╯┃╰━╯┃
**					╰━━━┻━━━┻━━━┻━━━╯		
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('lucidController', [])
	.controller('LucidController', ['$scope', '$timeout', function($scope, $timeout) {
		$scope.$parent.title = "מה זה חלום צלול?";
		$scope.$parent.metaDescription = "מה זה חלום צלול? מה ההבדל בין חלום צלול למדיטציה? לחלום רגיל? איך שולטים בחלומות? מה זה נותן?";

		$scope.paragraphs = // show p0 first 
			[
				{display: true}, 
				{display: false},
				{display: false},
				{display: false},
				{display: false},
			];
		
		/* collapse first the previous display, and after 0.5s show new one */
		$scope.showText = function(x) {
			$scope.paragraphs[x-1].display = false;
			$timeout(function() {
				$scope.paragraphs[x].display = true;
			}, 500);			
		};
	}]);
})(angular);