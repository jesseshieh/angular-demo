'use strict';

/* Services */
var Counter = function(value) {
  this.value = value || 0;
  this.increment = function(by) {
    this.value += by;
  }.bind(this);
};

// Demonstrate how to register services
// In this case it is a simple value service.
var app = angular.module('myApp.services', []);
app.value('version', '0.1');

app.factory('counter', ['counterPersistence', function(counterPersistence) {
  return counterPersistence.load();
}]);

app.factory('counterPersistence', function() {
  return {
    load: function() {
      return new Counter();
    },
    save: function(counter) {
      console.log('saving ' + JSON.stringify(counter));
    }
  }
});


