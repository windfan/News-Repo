(function(){
	'use strict';
	var app = angular.module('filters', []);
	
	app.filter('capitalized', function() {
    	return function(input) {
      		return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    	}
	});
	app.filter('reverse', function() {
  		return function(items) {
    		return items.slice().reverse();
  		};
	});
})();