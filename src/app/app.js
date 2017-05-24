angular.module("eShop", [
	'ui.router'
])

.config(function() {

})

.controller("eShopCtrl", function($state) {
	$state.go("home");
});
