(function(){
	'use strict';
	angular.module('newsRepo')
	
	.factory('Hashtag', function HashtagFactory($firebaseArray, Auth, GetAuth){
		return function() {
			var authData = GetAuth();
			var ref = new Firebase("https://news-repo.firebaseio.com/profiles");
			return $firebaseArray(ref.child(authData.uid).child("hashtags"));
		}
	})
})();