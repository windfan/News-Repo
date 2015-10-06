(function(){
	'use strict';
	var app = angular.module('forms', []);
	
	app.directive('urlForm', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/url-form.html',
			controller: 'AddUrlController',
			controllerAs: 'AddUrlCtrl',
			scope: {
				urls: '=',
			}

		}
	});
})();