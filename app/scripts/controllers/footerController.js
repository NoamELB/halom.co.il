/* ==========================================================================
	About Controller has two HTML templates, used for the tooltips.
	How it works:
		Each tooltip activates a function once it is clicked.
		The function disables the other tooltip.
		The result is a tooltip that is triggered by click, but clicking
		 the other tooltip disables the latter.
   =========================================================================*/
(function(angular){
	'use strict';
	angular.module('footerController', [])
	.controller('FooterController', ['$scope', function($scope) {
		$scope.connect = '<p class="rtl">פרטים<br>'
						+'<a target="_blank" href="mailto:mic.exe@gmail.com">mic.exe@gmail.com</a><p>';
		$scope.about = '<p class="rtl">האתר נוצר על ידי: <br>'
		+ '<a popover="hi" popover-trigger="mouseenter" target="_blank" href="https://www.linkedin.com/pub/tzook-shaked/a4/230/6a0">צוק</a>'
		+ ' & <a target="_blank" href="https://www.linkedin.com/pub/noam-elboim/a6/372/a">נעם</a>.<br>'
		+ '<a target="_blank" href="mailto:tzook10@gmail.com">tzook10@gmail.com</a><br>'
		+ '<a target="_blank" href="mailto:noam@mail.com">noam@mail.com</a><br>'
		+ '<a target="_blank" href="https://github.com/NoamELB/halom.co.il">קבצי מקור</a></p>';
	}]);
})(angular);