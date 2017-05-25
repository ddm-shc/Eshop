angular.module("eShop")

.config(function($stateProvider) {
    $stateProvider
        .state('checkout', {
            url: '/checkout',
            templateUrl: 'src/app/checkout/checkout.html',
            controller: "CheckoutCtrl"
        });
})

.service("checkoutService", function($http, $q) {

    var scope = this;

    scope.checkout = function(credentials) {
        var _params = {
            card_number: credentials.card[0] + credentials.card[1] + credentials.card[2] + credentials.card[3],
            name: credentials.name,
            email: credentials.email,
            phoneNumber: credentials.phoneNumber,
            address: credentials.address,
            zipcode: credentials.zipcode
        };

        return $http.post('http://localhost:3000/checkout', _params);
    };
})

.controller("CheckoutCtrl", function($scope, $state, checkoutService) {

    var init = function() {
        $scope.formData = {
            card: []
        };
    };

    $scope.checkout = function() {
        checkoutService.checkout($scope.formData)
            .then(function(res) {
                alert("Congratulations..!! Your order has been placed");
            }, function(err) {
                alert("Seems like something is broken. Please give us sometime");
            });
    };


    init();
});
