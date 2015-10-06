(function(){
	'use strict';
	angular.module('newsRepo')
	
	.factory("Form", ["$firebaseObject",
		function($firebaseObject) {
			return function(username) {
		  	// create a reference to the database node where we will store our data
		  		var ref = new Firebase("https://news-repo.firebaseio.com/profiles/");
		  		var profileRef = ref.child(username);

		  		// return it as a synchronized object
		  		// console.log($firebaseObject(profileRef));
		  		return $firebaseObject(profileRef);
			}
		}
	]);
})();