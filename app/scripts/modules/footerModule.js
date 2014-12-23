/*===========================================================================
** Footerbar module simply creates a footer-bar element, and has info
**  about the authors for the tooltip.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('siteFooterbar', [])
	.controller('FooterController', ['$scope', function($scope) {
		$scope.about = '<p>פרטי המחבר:<br>'
		+ '<a target="_blank" href="https://www.facebook.com/Elboim">מיכאל אלבוים</a><br>'
		+ 'האתר נוצר על ידי: <br>'
		+ '<a target="_blank" href="https://www.linkedin.com/pub/tzook-shaked/a4/230/6a0">צוק</a>'
		+ ' & <a target="_blank" href="https://www.linkedin.com/pub/noam-elboim/a6/372/a">נעם</a>.<br>'
		+ '<a target="_blank" href="mailto:tzook10@gmail.com">tzook10@gmail.com</a><br>'
		+ '<a target="_blank" href="mailto:noam@mail.com">noam@mail.com</a><br>'
		+ '<a target="_blank" href="https://github.com/NoamELB/halom.co.il">קבצי מקור</a></p>';
	}])
	.directive('footerBar', function() { // makes the entire footer-bar in another HTML template
	    return {
		  	restrict: 'E',
		  	templateUrl: 'partials/footer-bar.html',
		  	controller: 'FooterController'
	    };
	});
})(angular);