(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller('postController', ['$scope', '$firebaseArray', 'News',
		function($scope, $firebaseArray, News){
			$scope.urls = News();
			$scope.deletePost = function() {
				if(confirm('Delete?')) {
					alert("Sorry, functionality is still building.");
				}
				else {
					alert("Sorry, functionality is still building.");
				}
			};
		}
	]);
})();