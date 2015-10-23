(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller("AuthController", ["$scope", '$firebaseArray', "$location",
		function($scope, $location) {
			var ref = new Firebase("https://news-repo.firebaseio.com");
			// var isNewUser = true;
			// var vm = this;
			// var vm = this;
			// var isLoggedIn = false;
			ref.onAuth(function(authData){
				$scope.authData = authData;
			});
			$scope.login = function() {
				ref.authWithOAuthPopup("google", function(error, authData){
					$scope.authData = authData;
					if(error) {
						// isLoggedIn = false;
						if(error.code === "TRANSPORT_UNAVAILABLE") {
							// fall-back to browser redirects, and pick up the session
      						// automatically when we come back to the origin page
      						ref.authWithOAuthRedirect("google", function(error) { /* ... */ });
						}
					}
					else if(authData) {
						if(ref.child("profiles").child(authData.google.displayName) === null) {
							ref.child("profiles").child(authData.uid).set({
								"categories" : {1:"undefined"},
								"hashtags" : {1: "News-Repo"},
								"mail": getEmail(authData),
								"name": getName(authData),
								"news": {}
							});
						}
						// isLoggedIn = true;
						// $location.path = function(path) {
						// 	return $location.path.apply($location, [path]);
						// }
						event.preventDefault();
						$scope.$location.path('/home');
						if(!$scope.$$phase) $scope.$apply()
					}
				}, {
					remember: "sessionOnly",
					scope: "email"
				});


				function getName(authData) {
					return authData.google.displayName;
				}
				function getEmail(authData) {
					return authData.google.email;
				}
			};

			$scope.logout = function() {
				ref.unauth();
				// isLoggedIn = false;
			}
		}
	]);
})();