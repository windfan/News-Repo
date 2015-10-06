(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller('FormCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
			this.showForm = false;
			// var profileRef = new Firebase("https://news-repo.firebaseio.com/");
			// var newsRef = $firebaseArray(profileRef.child("profiles").child("ryu1031").child("news"));
			// $scope.form = Form("ryu1031");
			// console.log($scope.form);
			$scope.checkbox = function(data){
				var obj = [];
				for(var i in data) {
					if(data[i].SELECTED == 'true') {
						obj.push(data[i].id);
					}
				}
				console.log(obj);
			}
			$scope.saveLink = function(){
				var profileRef = new Firebase("https://news-repo.firebaseio.com/");
				var form = $firebaseArray(profileRef.child("profiles").child("ryu1031").child("news").child($scope.inputCategory));
				// console.log(whole.title);
				form.$add({
					description: $scope.inputDescription,
					hashtags: $scope.hashtag,
					time: Firebase.ServerValue.TIMESTAMP,
					title: $scope.inputTitle,
					url: $scope.inputUrl
				}).then(function(profileRef){
					var id = profileRef.key();
					alert("Added the link successfully!");
					form.$indexFor(id);
					$scope.inputTitle = '';
					$scope.inputUrl = '';
					$scope.inputDescription = '';
					$scope.inputCategory = '';
				});
				// var linksRef = $scope.form.child("news").child('undefined');
				// // console.log($scope.form);
				// var newLinkRef = linksRef.push();
				// newLinkRef.set({
				// 	description: '111111111',
				// 	hashtags: {"apple" : true},
				// 	time: Firebase.ServerValue.TIMESTAMP,
				// 	title: 'test',
				// 	url: 'http://www.victorportfolio.net',
				// });
			};
		}
	]);
})();