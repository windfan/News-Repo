(function(){
	'use strict';
	var app = angular.module('posts-list', []);
	
	app.directive('postList', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/post-list.html',
			controller: 'postController',
			controllerAs: 'postCtrl'
		}
	});
})();