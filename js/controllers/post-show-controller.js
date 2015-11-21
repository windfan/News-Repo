(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller('postController', ['$scope', '$firebaseArray', 'News',
		function($scope, $firebaseArray, News){
			$scope.urls = News();
			$scope.deletePost = function() {
				if(confirm('Delete?')) {
					alert("Yoooo");
				}
				else {
					alert("Booooo");
				}
			};
		}
	]);
})();