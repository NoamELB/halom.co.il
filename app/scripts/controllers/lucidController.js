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
	.controller('LucidController', ['$scope', '$timeout', '$location','$routeParams', 'Head', function($scope, $timeout, $location, $routeParams, Head) {
		var titles = [	"מה זה חלום צלול?",
						"מה ההבדל בין חלום צלול למדיטציה",
						"מה ההבדל בין חלום צלול לחלום רגיל",
						"איך שולטים בחלומות?",
						"מה חלימה צלולה תיתן לי?"
					];
		var des = [	"חלום צלול או חלימה מודעת, הינו מצב תת-הכרתי בו האדם החולם מצליח לשמור על מודעות מלאה בזמן החלום.",
					"במדיטציה אנו יוצרים סביבה על ידי דמיון מודרך, בה אנחנו שולטים, ורשאים לתקשר עם התת-מודע בצורה רצונית. בחלום הדברים קורים בצורה בלתי נשלטת ואקראית.",
					"הסבר על ההבדל בין חלום רגיל לחלום צלול, חלום צלול הינו חוויה חושית מלאה, חזקה הרבה יותר מחלום רגיל, ומגיעה יחד עם היכולת לשלוט בסביבה.",
					"בעזרת שיטות יצירתיות, נוכל להשתמש בחלומות הצלולים כדי לפתור בעיות יומיומיות, החל מפחדים וחרדות - ועד נדודי שינה. נשים דגש על שיפור השליטה בחיים שלנו ובסביבתנו בזמן הערות, מה שיוביל לשליטה בהם גם במהלך השינה.",
					"נלמד דברים רבים על מסתרי החלומות, השינה והחלימה המודעת. קריאת מאמרים תשפר את הקלט המחשבתי, וקריאת סיפורים תשפר את הקלט הרגשי."
					];
		var key = [	"חלום צלול, חלימה מודעת, שליטה בחלומות, שליטה במציאות, מיסטיקה.",
					"מדיטציה, תת-מודע, דמיון מודרך, רצון, אקראיות, חלום צלול.",
					"חלום רגיל, חלום צלול, חוויה חושית מלאה, שליטה בסביבה.",
					"שיטות יצירתיות, חלומות צלולים, בעיות יומיומיות, מפחדים, חרדות, נדודי שינה,  במהלך השינה.",
					"מסתרי החלומות, השינה, החלימה המודעת, הקלט המחשבתי, קריאת סיפורים, הקלט הרגשי."
					];

		$scope.paragraphs = // init all to be closed 
			[
				{display: false}, 
				{display: false},
				{display: false},
				{display: false},
				{display: false}
			];
		// Put the right meta tags for when refreshing the page
		var loc = parseInt($routeParams.toOpen);
		switch (loc) {
			case 1: case 2:	case 3: case 4: $scope.paragraphs[loc].display = true;
				break;
			default:
				$scope.paragraphs[0].display = true;
		}
		Head.setHead(titles[loc], des[loc], key[loc]);

		/* collapse first the previous display, and after 0.5s show new one */
		$scope.showText = function(x) {
			$scope.paragraphs[x-1].display = false;
			$timeout(function() {
				$scope.paragraphs[x].display = true;
				$location.path('/lucid/' + x, false);
				Head.setHead(titles[x], des[x], key[x]);

			}, 500);			
		};
	}]);
})(angular);