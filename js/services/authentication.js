(function(){
	'use strict';
	angular.module('newsRepo')
	
	.factory("Auth", ["$firebaseAuth",
	  	function($firebaseAuth) {
	    	var ref = new Firebase("https://news-repo.firebaseio.com");
	    	return $firebaseAuth(ref);
	  	}
	]);
})();