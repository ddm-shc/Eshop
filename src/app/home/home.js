angular.module("eShop")

.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'src/app/home/home.html',
            controller: "HomeCtrl"
        });
})

.service("homeService", function($http, $q) {

    var scope = this;

    /**
     * Method to fetch products
     **/
    scope.getProducts = function(q) {
        q = q ? q : '';
        return $http.get('http://localhost:3000/products?q=' + q);
    };

    /**
     * Method to add products to cart
     **/
    scope.addToCart = function(product) {
        return $http.post('http://localhost:3000/cart', product);
    };
})

.controller("HomeCtrl", function($scope, $state, homeService) {

    var init = function() {
        $scope.getProducts();
        $scope.selectedItem = 0;
    }

    $scope.getProducts = function() {
        homeService.getProducts()
            .then(function(res) {
                $scope.products = res.data;
            }, function(err) {
                alert("Oops..!!! Seems like we were not able to fetch products.");
            });
    };

    $scope.filterProducts = function() {
        homeService.getProducts($scope.query)
            .then(function(res) {
                $scope.filteredProducts = res.data;
            }, function(err) {
                alert("Oops..!!! Seems like we were not able to fetch products.");
            });
    };

    $scope.updateQuery = function(product) {
        $scope.query = product.title;
        $state.go("search", { query: $scope.query });
    };

    $scope.goToSearch = function(evt) {
        if (event.keyCode === 13) {
            $state.go("search", { query: $scope.query });
        }
    };

    $scope.addToCart = function(product) {
        homeService.addToCart(product)
            .then(function(res) {
                alert("Successfully added to cart");
            });
    };

    $scope.moveToPrev = function() {
        $scope.selectedItem -= 1;
    };

    $scope.moveToNext = function() {
        $scope.selectedItem += 1;
    };

    init();
});
