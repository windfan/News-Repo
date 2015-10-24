(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller("AuthController", ["$scope", '$firebaseArray', "$window",
		function($scope, $window) {
			var ref = new Firebase("https://news-repo.firebaseio.com");
			$scope.authData = null;

			var authDataCallback = function(authData) {
				console.log("789");
				if(authData === null) {
					console.log("123");
					$('#loginBtn').css('display', 'inline');
					$('#logoutBtn').css('display', 'none');
				}
				else {
					console.log("456");
					$('#loginBtn').css('display', 'none');
					$('#logoutBtn').css('display', 'inline');
				}
			}
			//monitoring authentication status
			ref.onAuth(authDataCallback);

			$scope.login = function() {
				// $scope.authData = null;
				ref.authWithOAuthPopup("google", function(error, authData){
					// $scope.authData = authData;
					if(error) {
						// isLoggedIn = false;
						if(error.code === "TRANSPORT_UNAVAILABLE") {
							// fall-back to browser redirects, and pick up the session
      						// automatically when we come back to the origin page
      						ref.authWithOAuthRedirect("google", function(error) { /* ... */ });
						}
					}
					else if(authData !== null) {
						var userExistsCallback = function(userID, exist) {
							if(!exist) {
								ref.child("profiles").child(authData.uid).set({
									"categories" : {1:"undefined"},
									"hashtags" : {1: "News-Repo"},
									"mail": getEmail(authData),
									"name": getName(authData),
									"news": {}									
								});
							}
						}

						var checkIfUserExists = function(userID) {
							ref.child("profiles").child(userID).once('value', function(snapshot){
								var exist = (snapshot.val() !== null);
								userExistsCallback(userID, exist);
							});
						}

						
						$scope.authData = authData;
						checkIfUserExists(authData.uid);
						// $window.location.reload(true);
						//Test to see if /profiles/<userid> has any data
						// isLoggedIn = true;
						// $location.path = function(path) {
						// 	return $location.path.apply($location, [path]);
						// }
						// event.preventDefault();
						// $scope.$location.path('/home');
						// if(!$scope.$$phase) $scope.$apply()
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
				$scope.authData = null;
				// isLoggedIn = false;
			}

		}
	]);
})();