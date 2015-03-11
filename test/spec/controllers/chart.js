'use strict';

describe('Controller: ChartCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsCourseApp'));

  var ChartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartCtrl = $controller('ChartCtrl', {
      $scope: scope
    });
  }));

  it('should be a max value', function () {
    expect(ChartCtrl.max).toBe(342);
  });
});
