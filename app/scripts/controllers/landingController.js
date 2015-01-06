/*===========================================================================
** Header controller - change meta tags for dream virgin page and landing page
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('landingController', [])
	.controller('LandingController', ['$scope', 'Head', function($scope, Head) {
		var meta = ['חלום - מדריך על חלומות צלולים',
					'חלום, אתר על חלומות צלולים, הכולל מאמרים על חלומות מודעים ועל השיטות השונות להפוך לרוקם חלומות. Halom, website about lucid dreams in hebrew.',
					'חלום צלול, חלימה מודעת, חלומות צלולים, תת מודע, מיכאל אלבוים, מיסטיקה.'
					];
		Head.setHead(meta[0], meta[1], meta[2]);
	}]);
})(angular);