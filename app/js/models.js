'use strict';
(function() {
  var Counter = function(value) {
    this.value = value || 0;
    this.increment = function(by) {
      return new Counter(this.value + by);
    }.bind(this);
  };

  var CounterPresenter = function(counter) {
    this.value = '$' + counter.value + '.00';
  };

  var app = angular.module('myApp');
  app.value('Counter', Counter);
  app.value('CounterPresenter', CounterPresenter);
})();
