/**
 * Created by Альона on 26.03.2017.
 */
angular.module('app', ['ui.router'])

    .config(function ($stateProvider) {

        $stateProvider
            .state('app', {

                controller: 'appCtrl',
                templateUrl: 'index.html'
            })
            .state('app.main', {
                url: '/main',
                controller: 'mainCtrl',
                templateUrl: 'main.html'
            })
            .state('app.nagro', {
                url: '/nagro',
                controller: 'appNagroCtrl',
                templateUrl: 'templates/view1.html'
            })
            .state('app.bio', {
                url: '/bio',
                controller: 'appBioCtrl',
                templateUrl: 'templates/view2.html'
            })
            .state('app.sulk', {
                url: '/sulk',
                controller: 'appSulkCtrl',
                templateUrl: 'templates/view3.html'
            })
            .state('app.shop', {
                url: '/shop',
                controller: 'appShopCtrl',
                templateUrl: 'templates/view4.html'
            })
            .state('app.answers', {
                url: '/answers',
                controller: 'appAnswersCtrl',
                templateUrl: 'templates/view5.html'
            })
            .state('app.contact', {
                url: '/contact',
                controller: 'appContactCtrl',
                templateUrl: 'templates/view6.html'
            })
            .state('app.cart', {
                url: '/cart',
                controller: 'appCartCtrl',
                templateUrl: 'templates/view7.html'
            });
    })

    .controller('appCtrl', function ($scope, $state) {
        console.log('app ctrl');
        $state.go('app.main');
    })
    .controller('mainCtrl', function ($scope, $state) {
        $scope.product= {
            select: null,
            productivity: null,
            price: null,
            square: null
        };
        $scope.$watch("product", function() {
            $scope.error = null;
            
            if ($scope.product.select && $scope.product.productivity > 0 && $scope.product.price > 0  && $scope.product.square > 0){

                //here some mathematical calculations

                $scope.profit = ($scope.product.productivity * $scope.product.price * $scope.product.square) * 2;
            } else {
                delete $scope.profit;
            }
        }, true)

    })
    .controller('appNagroCtrl', function ($scope, $state) {
        console.log('nagro ctrl');
    })
    .controller('appBioCtrl', function ($scope, $state) {
        console.log('appBioCtrl ctrl');
    })
    .controller('appSulkCtrl', function ($scope, $state) {
        console.log('appSulkCtrl ctrl');
    })
    .controller('appShopCtrl', function ($scope, $state) {
        console.log('appShopCtrl ctrl');
    })
    .controller('appAnswersCtrl', function ($scope, $state) {
        console.log('appAnswersCtrl ctrl');
    })
    .controller('appContactCtrl', function ($scope, $state) {
        console.log('appContactCtrl ctrl');
    })
    .controller('appCartCtrl', function ($scope, $state) {
        console.log('appCartCtrl ctrl');
    })
