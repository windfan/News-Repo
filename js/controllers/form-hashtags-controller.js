(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller('AddUrlController', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
		var profileRef = new Firebase("https://news-repo.firebaseio.com/");
		var authData = profileRef.getAuth();
		$scope.hashtags = $firebaseArray(profileRef.child('profiles').child(authData.uid).child('hashtags'));
		$scope.categories = $firebaseArray(profileRef.child('profiles').child(authData.uid).child('categories'));
		// $scope.form = Form("ryu1031", "undefined");
		// console.log($scope.form);
		// $scope.saveLink = function(){

		// 	var linksRef = $scope.form;
		// 	console.log(linksRef);
		// 	// var newLinkRef = linksRef.push();
		// 	// var d = Date();
		// 	linksRef.$add({
		// 		title: "test",
		// 		url: "http://www.victorportfolio.net",
		// 		hashtags: {"apple" : true},
		// 		description: "111111111",
		// 		time: Firebase.ServerValue.TIMESTAMP
		// 	})
		// };
		// console.log($scope.hashtags);
	}]);
})();