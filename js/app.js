(function(){
  	'use strict';
  	var app = angular.module('newsRepo', []);

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

	app.directive('postList', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/post-list.html',
			controller: function() {
				this.urls = urls;
				this.categories = categories;
				this.hashtags = hashtags;
			},
			controllerAs: 'postCtrl'
		}
	});

	app.directive('urlForm', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/url-form.html',
			controller: function() {
				this.showForm = false;
				this.link = {hashtags:{}};
				// this.url = {hashtags: {}};
				this.addUrl = function(form) {
					urls.push(this.link);
					this.link = {hashtags:{}};
					// this.url = {hashtags: {}};
					form.$setPristine();
				};
			}, 
			controllerAs: 'AddUrlCtrl',
			scope: {
				urls: '=',
				categories: '=',
				hashtags: '='
			}

		}
	});

	app.filter('capitalize', function() {
    	return function(input) {
      		return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    	}
	});

	var categories = ['undefined', 'health', 'technology', 'animal', 'movie', 'work', 'car'];
	var hashtags = ['apple', 'google', 'tesla', 'cat', 'dog', 'spotify', 'chromecast', 'neck'];
	var urls = [
		{
			title: 'Eddy Cue: Company not fixated on immediate Apple Music numbers',
			url: 'http://9to5mac.com/2015/10/01/apple-music-paid-subscriptions/',
			description: 'In an interview with London’s Evening Standard, Apple SVP Eddy Cue said that Apple \
			is relaxed about how many Apple Music subscribers are immediately willing to pay for the service \
			once their free trial ends. Ultimately, you never know until it happens. But we’re pleased with the\
			 number of people who have tried. Everybody gets fixated on the short term but we’re in this for the\
			  long haul. Though published today, the interview took place before the trial ended for early \
			  adopters, so doesn’t give any hint as to conversion rates …',
			categories: "technology",
			hashtags: { apple: true, spotify: false}
		},
		{
			title: 'Updated Google Photos for Android app now available w/ Chromecast support',
			url: 'http://9to5google.com/2015/10/01/google-photos-android-app/',
			description: 'Chromecast related news',
			categories: "technology",
			hashtags: { google: true, chromecast: true}
		},
		{
			title: 'Tesla’s Model X is finally here, and I got to drive it',
			url: 'http://www.theverge.com/2015/9/29/9411049/tesla-model-x-suv-release-price-video-elon-musk',
			description: 'Tesla newest model: Model X, it is soooo awesome!',
			categories: "car",
			hashtags: { tesla: true}
		},
		{
			title: 'Never Wake Up with Neck Pain Again',
			url: 'http://www.menshealth.com/health/get-rid-neck-pain',
			description: 'Neck pain related news!',
			categories: "health",
			hashtags: { neck: true}
		},
		{
			title: 'Never Wake Up with Neck Pain Again',
			url: 'http://www.menshealth.com/health/get-rid-neck-pain',
			description: 'Neck pain related news!',
			categories: "health",
			hashtags: { neck: true}
		}
	];
})();
