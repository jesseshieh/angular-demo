'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /counter when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/counter");
  });


  describe('counter', function() {

    beforeEach(function() {
      browser.get('index.html#/counter');
    });


    it('should render counter when user navigates to /counter', function() {
      expect(element.all(by.css('[ng-view]')).first().getText()).
        toMatch(/0/);
    });

  });


  describe('big-counter', function() {

    beforeEach(function() {
      browser.get('index.html#/big-counter');
    });


    it('should render big-counter when user navigates to /big-counter', function() {
      expect(element.all(by.css('[ng-view]')).first().getText()).
        toMatch(/0/);
    });

  });
});
