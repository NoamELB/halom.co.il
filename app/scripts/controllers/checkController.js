/*===========================================================================
** Check controller closes the modal after 3s for reality-check.
** STOP!~!
** Are you dreaming now?!
** Maybe you should run a reality check real quick.
*===========================================================================*/ 
(function(angular){
	'use strict';
	angular.module('checkController', [])
	.controller('CheckController', ['$scope', '$timeout', '$modalInstance', function($scope, $timeout, $modalInstance) {
		$timeout(function() {
			$modalInstance.dismiss('cancel');
		}, 4000);
	}]);
})(angular);