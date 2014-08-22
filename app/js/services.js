'use strict';

/* Services */
var Counter = function(value) {
  this.value = value || 0;
  this.increment = function(by) {
    return new Counter(this.value + by);
  }.bind(this);
};

// Demonstrate how to register services
// In this case it is a simple value service.
var app = angular.module('myApp.services', []);
app.value('version', '0.1');

app.factory('counterPersistence', function() {
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


