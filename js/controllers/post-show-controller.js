(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller('postController', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
		var profileRef = new Firebase("https://news-repo.firebaseio.com/");
		$scope.urls = $firebaseArray(profileRef.child('profiles').child('ryu1031').child('news'));
		// console.log($scope.urls);
	}]);
})();