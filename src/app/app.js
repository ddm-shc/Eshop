angular.module("eShop", [
	'ui.router'
])

.config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
})

.controller("eShopCtrl", function($state) {
	
});
