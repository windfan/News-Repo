(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller('FormCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
			this.showForm = false;
			function checkbox(hashtags) {
				var arr = {};
				for(var hashtag in hashtags) {
					if(hashtags[hashtag].SELECTED === true){
						arr[hashtags[hashtag].$value] = true;
					}
				}
				return arr;
			}

			$scope.addCategory = function() {
				var profileRef = new Firebase("https://news-repo.firebaseio.com/");
				var authData = profileRef.getAuth();
				var category = $firebaseArray(profileRef.child('profiles').child(authData.uid).child("categories"));
				var newCategory = prompt("Please enter your new folder name.");
				if(newCategory != "") {
					category.$add(newCategory).then(function(){
						alert("Successfully!");
					});
				}
				else {
					alert("Please enter a folder name");
				}
			}

			$scope.addHashtag = function() {
				var profileRef = new Firebase("https://news-repo.firebaseio.com/");
				var authData = profileRef.getAuth();
				var hashtag = $firebaseArray(profileRef.child('profiles').child(authData.uid).child("hashtags"));
				var newHashtag = prompt("Please enter a new hashtag.");
				if(newHashtag != "") {
					hashtag.$add(newHashtag).then(function(){
						alert("Successfully!");
					});
				}
				else {
					alert("Please enter a folder name");
				}
			}
			$scope.saveLink = function(hashtags){
				var profileRef = new Firebase("https://news-repo.firebaseio.com/");
				var authData = profileRef.getAuth();
				var form = $firebaseArray(profileRef.child("profiles").child(authData.uid).child("news").child($scope.inputCategory));
				// console.log(hashtags);
				var obj = checkbox(hashtags);
				// console.log(obj);
				form.$add({
					description: $scope.inputDescription,
					hashtags: obj,
					time: Firebase.ServerValue.TIMESTAMP,
					title: $scope.inputTitle,
					url: $scope.inputUrl
				}).then(function(profileRef){
					var id = profileRef.key();
					alert("Added the link successfully!");
					//clean the form
					form.$indexFor(id);
					$scope.inputTitle = '';
					$scope.inputUrl = '';
					$scope.inputDescription = '';
					$scope.inputCategory = '';
					for(var hashtag in hashtags) {
						hashtags[hashtag].SELECTED = false;
					}
					this.showForm = false;
					// this.showForm = !this.showForm;
				});
			};
		}
	]);
})();