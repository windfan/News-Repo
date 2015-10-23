(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller('postController', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
		var profileRef = new Firebase("https://news-repo.firebaseio.com/");
		var authData = profileRef.getAuth();
		$scope.urls = $firebaseArray(profileRef.child('profiles').child(authData.uid).child('news'));
		// console.log("123");
		// console.log($scope.urls);
		$scope.deletePost = function() {
			if(confirm('Delete?')) {
				alert("Yoooo");
			}
			else {
				alert("Booooo");
			}
		};
	}]);
})();