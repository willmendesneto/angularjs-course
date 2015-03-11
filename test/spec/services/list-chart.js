'use strict';

describe('Service: listChart', function () {

  // load the service's module
  beforeEach(module('angularjsCourseApp'));

  // instantiate service
  var listChart;
  beforeEach(inject(function (_listChart_) {
    listChart = _listChart_;
  }));

  it('should do something', function () {
    expect(!!listChart).toBe(true);
  });

});
