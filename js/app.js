(function(){
  	'use strict';
  	var app = angular.module('newsRepo', ['posts-list', 'filters', 'animations', 'forms', 'firebase', 'ngRoute']);

	app.directive('navBar', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/nav-bar.html',
			controller: function() {
				this.tab = 1;
		  		this.selectTab = function(tabValue) {
		  		this.tab = tabValue;
		  		};
		  		this.isSelected = function(checkTab) {
		  			return this.tab === checkTab;
		  		};
			},
			controllerAs: 'newsRepoCtrl'
		}
	});	
})();
