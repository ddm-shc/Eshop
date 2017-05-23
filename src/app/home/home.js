angular.module("eShop")

.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/app/home/home.html',
            controller: "HomeCtrl"
        });
})

.controller("HomeCtrl", function($scope) {
    $scope.title = "Hello";
});
