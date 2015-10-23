(function(){
  	'use strict';
  	angular.module('newsRepo')

  	.config(function($routeProvider){
  		$routeProvider.when('/home', {
  			templateUrl: 'partials/pages/home/index.html',
        resolve: {
                "currentAuth": ["$firebaseAuth", function ($firebaseAuth) {
                    // $requireAuth returns a promise if authenticated, rejects if not
                    var ref = new Firebase("https://news-repo.firebaseio.com");
                    var authObj = $firebaseAuth(ref);

                    return authObj.$requireAuth();
                }]
            }
  		})
  		.when('/mynews', {
  			templateUrl: 'partials/pages/mynews/index.html',
  			controller: 'postController',
  			controllerAs: 'postCtrl',
        resolve: {
                "currentAuth": ["$firebaseAuth", function ($firebaseAuth) {
                    // $requireAuth returns a promise if authenticated, rejects if not
                    var ref = new Firebase("https://news-repo.firebaseio.com");
                    var authObj = $firebaseAuth(ref);

                    return authObj.$requireAuth();
                }]
            }
  		})
  		.when('/', {
  			templateUrl: 'partials/pages/login/index.html',
        controller: 'AuthController',
        controllerAs: 'authCtrl'
  		})
  		.otherwise({redirectTo: '/'});
  	});

	
})();
