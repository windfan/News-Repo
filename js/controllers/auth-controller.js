(function(){
	'use strict';
	angular.module('newsRepo')
	
	.controller("AuthController", ["$scope", "$location",
		function($scope, $location) {
			var ref = new Firebase("https://news-repo.firebaseio.com");
			$scope.authData = null;
			$scope.show = {
				intro: true,
			};
			$scope.signUp = false;
			var authDataCallback = function(authData) {
				$scope.authData = authData;
				if($scope.authData === null) {
					$scope.show.intro = true;
					// $scope.signUp = false;
				}
				else {
					$scope.show.intro = false;
					// $scope.signUp = false;
				}

				//jQuery way to change the appearence of button
				// console.log("789");
				// if(authData === null) {
				// 	console.log("123");
				// 	$('#loginBtn').css('display', 'inline');
				// 	$('#logoutBtn').css('display', 'none');
				// }
				// else {
				// 	console.log("456");
				// 	$('#loginBtn').css('display', 'none');
				// 	$('#logoutBtn').css('display', 'inline');
				// }
			}

			var userExistsCallback = function(userID, exist) {
				if(!exist) {
					ref.child("profiles").child($scope.authData.uid).set({
						"categories" : {1:"undefined"},
						"hashtags" : {1: "News-Repo"},
						"mail": getEmail($scope.authData),
						// "name": getName($scope.authData),
						"news": {}									
					});
				}
			};

			var checkIfUserExists = function(userID) {
				ref.child("profiles").child(userID).once('value', function(snapshot){
					var exist = (snapshot.val() !== null);
					console.log("123");
					userExistsCallback(userID, exist);
				});
			};					

			var getName = function(authData) {
				if(authData.provider === 'google') {
					return authData.google.displayName;
				}
				else if(authData.provider === 'password') {
					return authData.password.displayName;
				}
			};

			var getEmail = function(authData) {
				if(authData.provider === 'google') {
					return authData.google.email;
				}
				else if(authData.provider === 'password') {
					return authData.password.email;
				}
			};		

			// monitoring authentication status
			ref.onAuth(authDataCallback);

			$scope.signUpBtn = function() {
				ref.createUser({
					email: $scope.signUpAccount,
					password: $scope.signUpPassword
				}, function(error, userData){
					if(error) {
						alert('Error creating user:', error);
					}
					else {
						$scope.signUpAccount = '';
						$scope.signUpPassword = '';
						$scope.signUpRePassword = '';
						$scope.signUp = false;
						alert('successfully creating your account, then please login');
					}
				});
			};

			$scope.loginBtn = function() {
				ref.authWithPassword({
					email: $scope.inputAccount,
					password: $scope.inputPassword
				}, function(error, authData){
					if(error) {
						alert("Login failed!", error);
					}
					else if(authData !== null){
						$scope.authData = authData;
						$scope.show.intro = false;
						checkIfUserExists(authData.uid);
						$scope.$apply(function() {
						  	$location.path('/home').replace();
						});
					}
				}, {
					remember: "sessionOnly"
				});
			}


			$scope.googleLogin = function() {
				ref.authWithOAuthPopup("google", function(error, authData){
					if(error) {
						if(error.code === "TRANSPORT_UNAVAILABLE") {
							// fall-back to browser redirects, and pick up the session
      						// automatically when we come back to the origin page
      						ref.authWithOAuthRedirect("google", function(error) { /* ... */ });
						}
					}
					else if(authData !== null) {

						$scope.authData = authData;
						$scope.show.intro = false;
						//check user's existence
						checkIfUserExists(authData.uid);


						//redirect to home page if login successfully
						$scope.$apply(function() {
						  	$location.path('/home').replace();
						});

						
					}
				}, {
					remember: "sessionOnly",
					scope: "email"
				});
			};

			$scope.logout = function() {
				ref.unauth();
				$scope.authData = null;
				$scope.show.intro = true;
			};

			$scope.signupBtn = function() {
				$scope.signUp = !$scope.signUp;
			}			
		}
	]);
})();

