(function(){
	'use strict';
	var app = angular.module('posts-list', []);
	
	app.directive('postList', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/post-list.html',
			controller: 'postController',
			controllerAs: 'postCtrl'
		}
	});
	// var categories = ['undefined', 'health', 'technology', 'car'];
	// var hashtags = ['apple', 'google', 'tesla', 'cat', 'dog', 'spotify', 'chromecast', 'neck'];
	// var urls = 
	// {
	// 	"undefined" : [
	// 		{
	// 			"title" : "Tim Cook: Apple will offer an Apple TV API to open up universal search beyond initial launch partners",
	// 			"url" : "http://9to5mac.com/2015/10/03/tim-cook-apple-tv-universal-search/",
	// 			"description" : "The Apple TV is launching later in October but many of the details about the device remain under wraps. At the announcement, Apple announced that the Apple TV Siri universal search feature will include data from iTunes, Netflix, Hulu, Showtime and HBO. Many had hoped that Apple would be more open with this feature, allowing Siri to incorporate data from third-party services without requiring a special Apple partnership. In a move that will please many, Tim Cook has announced that Apple will offer an API for universal search, after all, via an interview with Buzzfeed.",
	// 			"hashtags" : { "apple": true, "spotify": false},
	// 			"time" : 1443851521
	// 		},
	// 		{
	// 			"title": "Eddy Cue: Company not fixated on immediate Apple Music numbers",
	// 			"url": "http://9to5mac.com/2015/10/01/apple-music-paid-subscriptions/",
	// 			"description": "The company has, however, been making some moves in that general direction, starting with its own SIM card, working with carriers to develop a standard for universal SIMs and launching an iPhone Upgrade Plan that allows customers to get a new phone each year directly from Apple rather than via carriers.",
	// 			"hashtags": { "apple": true, "spotify": false},
	// 			"time" : 1443937921
	// 		}
	// 	],
	// 	"health" : [
	// 		{
	// 			"title": "Never Wake Up with Neck Pain Again",
	// 			"url": "http://www.menshealth.com/health/get-rid-neck-pain",
	// 			"description": "Waking up with a pain in your neck is, well, a pain in the neck. You know it probably came from you sleeping “funny,” but what exactly does that mean? ",
	// 			"hashtags": { "neck": true},
	// 			"time" : 1441086721
	// 		},
	// 		{
	// 			"title": "Dress Cool without Looking Like You’re Trying So Hard",
	// 			"url": "http://www.menshealth.com/style/dress-cool-without-looking-youre-trying-so-hard",
	// 			"description": "Even if you’ve never watched a soccer game in your life, you know the name David Beckham. Why? Because when it comes to all matters of life, there’s a good chance David Beckham is crushing it. ",
	// 			"hashtags": { "neck": true},
	// 			"time" : 1438408321
	// 		}
	// 	],
	// 	"technology" : [
	// 		{
	// 			"title": "Updated Google Photos for Android app now available w/ Chromecast support",
	// 			"url": "http://9to5google.com/2015/10/01/google-photos-android-app/",
	// 			"description": "Google announced a couple of days ago that a new version of the Google Photos Android app was on the way, Chromecast support, people labelling and album collaboration – features first spotted a week ago. Google has advised that this update is now available … ",
	// 			"hashtags": { "google": true, "chromecast": true},
	// 			"time" : 1443678721
	// 		},
	// 		{
	// 			"title": "Alphabet drops Google’s ‘don’t be evil’ in favor of ‘do the right thing’ in new code of conduct",
	// 			"url": "http://9to5google.com/2015/10/03/alphabet-dont-be-evil-gone/",
	// 			"description": "Google has somewhat famously adopted the the phrase ‘don’t be evil’ as a business-wide mantra in the past. In fact, it was written in the company’s code of conduct for employees. With the company adopting an entirely new structure, the time has finally come for the mantra to change. Alphabet, the new holding company’s message to employees: Do the right thing.",
	// 			"hashtags": { "google": true, "chromecast": false},
	// 			"time" : 1441086721
	// 		}
	// 	],
	// 	"car" : [
	// 		{
	// 			"title": "Tesla’s Model X is finally here, and I got to drive it",
	// 			"url": "http://www.theverge.com/2015/9/29/9411049/tesla-model-x-suv-release-price-video-elon-musk",
	// 			"description": "“I’m not sure anyone should make this car, really. I mean, yeah. There is far more there than is really necessary to sell a car,” Musk says, trailing off. There is a genuine sense of introspection that maybe — just maybe — the Model X is over-engineered, that Tesla took on too much, and that's why this car is multiple years late to showroom floors.",
	// 			"hashtags": { "tesla": true},
	// 			"time" : 1438408321
	// 		},
	// 		{
	// 			"title": "Model X | Tesla Motors",
	// 			"url": "http://www.teslamotors.com/modelx",
	// 			"description": "Tesla Model X Official Website.",
	// 			"hashtags": { "tesla": true},
	// 			"time" : 1443678721
	// 		}
	// 	]
	// };
})();