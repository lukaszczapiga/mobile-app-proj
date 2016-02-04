'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'MapController'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/map',{
            templateUrl: '/partials/map.html',
            controller: 'mapCtrl'
        })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
}]);