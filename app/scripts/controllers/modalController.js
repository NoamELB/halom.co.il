/* ==========================================================================
	Modal Controller simply lets the window know when the modal has closed.
	This is important, since the scroll-ability is disabled when the modal
	 is open.
   =========================================================================*/
(function(angular){
	'use strict';
	angular.module('modalController', [])
	.controller('ModalController', ['$modalInstance', '$window', function($modalInstance, $window) {

	}]);
})(angular);