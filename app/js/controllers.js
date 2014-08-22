'use strict';

/* Controllers */
var CounterPresenter = function(counter) {
  this.value = '$' + counter.value + '.00';
};

angular.module('myApp.controllers', ['myApp.services'])
  .controller('CounterCtrl', [ '$scope', 'counterPersistence', function($scope, counterPersistence) {
    var counter = counterPersistence.load();
    $scope.counter = new CounterPresenter(counter);
    $scope.increment = function(by) {
      counter = counter.increment(by);
      $scope.counter = new CounterPresenter(counter);
      counterPersistence.save(counter);
    };
  }])
  .controller('BigCounterCtrl', ['$scope', 'counterPersistence', function($scope, counterPersistence) {
    var counter = counterPersistence.load();
    $scope.counter = new CounterPresenter(counter);
    $scope.increment = function(by) {
      counter = counter.increment(by);
      $scope.counter = new CounterPresenter(counter);
      counterPersistence.save(counter);
    };
  }]);
