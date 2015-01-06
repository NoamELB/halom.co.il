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
		var current = -1; // currently open collapse

		// variables for the Head.setHead(title, meta description, meta keywords) function
		var menuMetas = [	"חלום צלול - מאמרים",
							"מאמרים שונים על חלומות צלולים ושליטה בתת-מודע. כדוגמת: איך לנהל יומן חלומות, מה זה בדיקת מציאות, דרכים להתמודדות עם שיתוק שינה ועוד.",
							"יומן חלומות, בדיקת מציאות, שיתוק שינה, WILD, MILD, חלום צלול, תת-מודע."];
		var titles = [	"חלום צלול - יומן החלומות",
						"חלום צלול - שבירת הגוף",
						"חלום צלול - בדיקת מציאות",
						"חלום צלול - מדריך החלומות",
						"חלום צלול - שיתוק שינה",
						"חלום צלול - MILD",
						"חלום צלול - WILD",
						"חלום צלול - אליס",
						"חלום צלול - הישרדות בחלום",
						"חלום צלול - התחלה (הסרט)",
						"חלום צלול - מחקר במכון ויצמן"
						];
		var des = [	"השלב הראשון בדרך לחלומות הצלולים, איך לנהל יומן חלומות או מחברת חלומות. הליך רישום החלומות הוא הבסיס לכל מה שתעשו, לכן הוא חשוב כל כך.",
					"רשמנו חלומות ביומן או מחברת במשך שבועות ועדיין לא קרה כלום, מה אני צריך לעשות כדי לחוות חלום צלול?",
					"בדיקות המציאות באות להגיד לנו האם אנחנו חולמים או לא. מדריך על אופן הביצוע של בדיקת מציאות, מתי? איך? ולמה?",
					"הסבר על מדריך החלומות - כל מי שאיי פעם עשה מדיטציה, וודאי נפגש עם דמות כלשהי. חיית עוצמה, מדריך אישי, מלאך, יישות אור, או מורה המוביל אל הדרך הנכונה.",
					"הסבר על שיתוק שינה - שיתוק השינה אינו הפרעת שינה ואין כל קשר בינו לבין הפרעות שינה. שיתוק השינה וכל התהליכים הקשורים אליו הינם תהליכים טבעיים לחלוטין שאנו חווים בכל לילה.",
					"MILD - Mnemonic Induced Lucid Dreaming. הסבר על שיטה פרקטית לכניסה לחלומות צלולים.",
					"WILD - Wake-Initiated Lucid Dreaming. הסבר על שטיה פרקטית לכניסה לחלום צלול.",
					"מאמר על אליס בארץ הפלאות בהקשרי חלומות, בדגש על האופן שבו אנחנו רואים מראה או מראות בחלומות ובעיקר בחלום צלול. על האופן שבא אנחנו תופשים את עצמנו בתת-מודע.",
					"חלימה מודעת למתקדמים - מדריך על הדרכים לשיפור והגברת הצלילות בחלום צלול על-ידי שיטות שונות.",
					"ניתוח של הסרט התחלה (Inception) בהקשרי חלומות צלולים או חלימה מודעת. האם זה סרט יותר מציאותי ממה שחשבנו?",
					"הסבר על מחקר שנעשה על חלומות צלולים וחלימה מודעת במכון ויצמן ב-2011 על-ידי חלימה צלולה בתוך מכשיר MRI."
					];
		var key = [	"חלומות צלולים, יומן חלומות, מחברת חלומות, רישום החלומות,  בסיס.",
					"חלומות, יומן, חלום צלול, גוף, נשמה, גישה הפיזיולוגית, גישה הרוחנית.",
					"בדיקת מציאות, בדיקות מציאות, חלום צלול, התעוררות כוזבת, חלום שווא, ספירת אצבעות, מבחן הזיכרון, מבחן ההיגיון.",
					"מדריך החלומות, מדיטציה, דמות, חיית עוצמה, מדריך אישי, מלאך, יישות אור,  מורה.",
					"שיתוק שינה, הפרעת שינה, תהליכים טבעיים, לילה, הירדמות, שינה היפנוגוגית, תחושת נפילה, פחד.",
					"MILD, Mnemonic, Induced, Lucid, Dreaming, כניסה לחלומות צלולים, WBTB, מעגלי שינה, REM.",
					"WILD,Wake-Initiated, Lucid, Dreaming, כניסה לחלום צלול, מדיטציית 7 השעות, מיקאוֹ אוּסוּי, מעגלי השינה, MILD.",
					"אליס, ארץ הפלאות, חלומות, מראה, חלום צלול, תפישה עצמית, תת-מודע.",
					"חלימה מודעת למתקדמים, שיפור צלילות, הגברת צלילות, חלום צלול, התבוננות, שפשוף ידיים, סיבוב במקום, פקודות קוליות, ריצה, בדיקת מציאות.",
					"סרט, התחלה, Inception, חלומות צלולים, חלימה מודעת, מציאותי, חלימה, תת-מודע, בדיקת מציאות, קובּ, לימבו.",
					"מחקר, חלומות צלולים, חלימה מודעת, מכון ויצמן, 2011, חלימה צלולה, MRI."
					];
 		
 		/* gets data from service */
		ArticlesList.success(function(data){
			$scope.articles = data;				
			angular.forEach($scope.articles, function(article, index) { // initalize all to be closed
				article.isOpen = false;
			});
			
			if ($routeParams.toOpen === "menu")
				Head.setHead(menuMetas[0],menuMetas[1],menuMetas[2]);
			else Head.setHead(titles[parseInt($routeParams.toOpen)], des[parseInt($routeParams.toOpen)], key[parseInt($routeParams.toOpen)]);
			/* decides which collapse to open upon load. default is menu to open none */
			$timeout(function() {					
				if (parseInt($routeParams.toOpen) >= 0 && current < 0) { 				
					$scope.articles[parseInt($routeParams.toOpen)].isOpen = true;
					current = parseInt($routeParams.toOpen); 
				}
			}, 0);
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
				Head.setHead(titles[index], des[index], key[index]);
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