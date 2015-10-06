(function(){
  	'use strict';
  	angular.module('newsRepo')

  	.config(function($routeProvider){
  		$routeProvider.when('/home', {
  			templateUrl: 'partials/pages/home/index.html'
  		})
  		.when('/mynews', {
  			templateUrl: 'partials/pages/mynews/index.html',
  			controller: 'postController',
  			controllerAs: 'postCtrl'
  		})
  		.when('/', {
  			templateUrl: 'partials/pages/home/index.html'
  		})
  		.otherwise({redirectTo: '/'});
  	});

	
})();
