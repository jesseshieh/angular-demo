'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/counter', {templateUrl: 'partials/counter.html', controller: 'CounterCtrl'});
  $routeProvider.when('/big-counter', {templateUrl: 'partials/big-counter.html', controller: 'BigCounterCtrl'});
  $routeProvider.otherwise({redirectTo: '/counter'});
}]);
