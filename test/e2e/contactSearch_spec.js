'use strict';

describe('contact search in application', function () {

  it('using search filter', function () {
    browser.get('/');

    element(by.css('#search')).sendKeys('');

    element.all(by.css('.contact-list-item')).then(function(items) {
      expect(items.length).toBe(6);
    });
  });

  it('using search filter', function () {

    browser.get('/');

    element(by.css('#search')).sendKeys('Allan Benjamin');

    element.all(by.css('.contact-list-item')).then(function(items) {
      expect(items.length).toBe(1);
    });

  });

});
