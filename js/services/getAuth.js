(function(){
	'use strict';
	angular.module('newsRepo')
	
	.factory('GetAuth', function GetAuthFactory($firebaseAuth){
		return function() {
			var ref = new Firebase("https://news-repo.firebaseio.com");
			return ref.getAuth();
		}
	})
})();