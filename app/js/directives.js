'use strict';

/* Directives */


var directives = angular.module('myApp.directives', [])
directives.directive('appVersion', ['version', function (version) {
  return function (scope, elm, attrs) {
    elm.text(version);
  };
}]);
directives.directive('counterView', function () {
  return {
    restrict: 'E',
    scope: {
      counter: '=counter'
    },
    template: '<div style="background-color: green">{{ counter.value }}</div>'
  }
});
directives.directive('incrementButton', function () {
  return {
    restrict: 'E',
    scope: {
      increment: '=increment',
      by: '=by'
    },
    template: '<div style="background-color: red"><button ng-click="increment(by)">+{{ by }}</button></div>'
  }
});
