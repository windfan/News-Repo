(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller('AddUrlController', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
		var profileRef = new Firebase("https://news-repo.firebaseio.com/");
		$scope.hashtags = $firebaseArray(profileRef.child('hashtags'));
		$scope.categories = $firebaseArray(profileRef.child('categories'));
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