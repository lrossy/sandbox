/**
 * Created by Luke on 21/01/2015.
 */
var app = angular.module('demoApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            controller: 'SimpleController',
            templateUrl: 'partials/view1.html'
        })
        .when('/view2',
        {
            controller: 'SimpleController',
            templateUrl: 'partials/view2.html'
        })
        .otherwise({redirectTo: '/'});
});

app.controller('SimpleController',
    function SimpleController($scope) {
        $scope.customers = [
            {name: 'John Doe', city: 'New York'},
            {name: 'Jane Doe', city: 'San Fransisco'},
            {name: 'Joe Smith', city: 'Washington'}
        ];

        $scope.addCustomer = function() {
            $scope.customers.push(
                {
                    name: $scope.newCustomer.name,
                    city: $scope.newCustomer.city
                }
            );
        };
    }
);