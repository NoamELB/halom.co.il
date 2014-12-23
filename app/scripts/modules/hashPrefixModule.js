/*===========================================================================
** Hash prefix set the hashbang prefix (#!) for SEO
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('hashPrefix', [])
	.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}]);
})(angular);