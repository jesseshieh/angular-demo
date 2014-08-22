'use strict';
(function() {
  /* Controllers */
  angular.module('myApp')
    .controller('CounterCtrl', function($scope, counterPersistence, CounterPresenter) {
      var counter = counterPersistence.load();
      $scope.counter = new CounterPresenter(counter);
      $scope.increment = function(by) {
//        var counter = counterPersistence.load();
        counter = counter.increment(by);
        $scope.counter = new CounterPresenter(counter);
        counterPersistence.save(counter);
      };
    })
    .controller('BigCounterCtrl', function($scope, counterPersistence, CounterPresenter) {
      var counter = counterPersistence.load();
      $scope.counter = new CounterPresenter(counter);
      $scope.increment = function(by) {
        counter = counter.increment(by);
        $scope.counter = new CounterPresenter(counter);
        counterPersistence.save(counter);
      };
    });
})();
