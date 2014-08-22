'use strict';
(function() {
  // Declare app level module which depends on filters, and services
  var app = angular.module('myApp', [
    'ngRoute',
  ]);
  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/counter', {
      templateUrl: 'partials/counter.html',
      controller: 'CounterCtrl'
    });
    $routeProvider.when('/big-counter', {
      templateUrl: 'partials/big-counter.html',
      controller: 'BigCounterCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/counter'});
  }]);
})();
