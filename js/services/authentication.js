(function(){
	'use strict';
	angular.module('newsRepo')
	
	.factory('Auth', function AuthFactory($firebaseAuth){
		return function() {
			var ref = new Firebase("https://news-repo.firebaseio.com");
			return $firebaseAuth(ref);
		}
	})
})();