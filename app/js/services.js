'use strict';
(function() {
  var app = angular.module('myApp');
  app.value('version', '0.1');
  app.factory('counterPersistence', function(Counter) {
    var _counter = new Counter();
    return {
      load: function() {
        return _counter;
      },
      save: function(counter) {
        console.log('saving ' + JSON.stringify(counter));
        _counter = counter;
      }
    }
  });
})();
