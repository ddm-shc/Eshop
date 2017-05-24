angular.module("eShop")

.config(function($stateProvider) {
    $stateProvider
        .state('search', {
            url: '/search?q=:query',
            templateUrl: 'src/app/search/search.html',
            controller: "SearchCtrl"
        });
})

.controller("SearchCtrl", function($scope, homeService, $state) {

    var init = function() {
        $scope.query = $state.params.query;
        $scope.filterProducts();
    };


    $scope.filterProducts = function() {
        homeService.getProducts($scope.query)
            .then(function(res) {
                $scope.products = res.data;
            }, function(err) {
                alert("Oops..!!! Seems like we were not able to fetch products.");
            });
    };

    $scope.addToCart = function(product) {
        homeService.addToCart(product)
            .then(function(res) {
                alert("Successfully added to cart");
            });
    };

    init();
});
