(function(){
	'use strict';
	angular.module('newsRepo')
	
	.factory('Category', function CategoryFactory($firebaseArray, Auth, GetAuth){
		return function() {
			var authData = GetAuth();
			var ref = new Firebase("https://news-repo.firebaseio.com/profiles");
			return $firebaseArray(ref.child(authData.uid).child("categories"));
		}
	})
})();