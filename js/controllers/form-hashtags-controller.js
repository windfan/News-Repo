(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller('AddUrlController', ['$scope', '$firebaseArray', "Hashtag", "Category",
		function($scope, $firebaseArray, Hashtag, Category){
			$scope.hashtags = Hashtag();
			$scope.categories = Category();
		}
	]);
})();