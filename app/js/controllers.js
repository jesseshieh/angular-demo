'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
  .controller('CounterCtrl', [ '$scope', 'counter', 'counterPersistence', function($scope, counter, counterPersistence) {
    $scope.counter = counter;
    $scope.increment = function(by) {
      counter.increment(by);
      counterPersistence.save(counter);
    };
  }])
  .controller('BigCounterCtrl', ['$scope', 'counter', function($scope, counter) {
    $scope.counter = counter;
  }]);
