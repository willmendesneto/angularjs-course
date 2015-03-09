'use strict';

describe('Service: contactsService', function () {

  // load the service's module
  beforeEach(module('angularjsCourseApp'));

  // instantiate service
  var contactsService;
  beforeEach(inject(function (_contactsService_) {
    contactsService = _contactsService_;
  }));

  it('should do something', function () {
    expect(!!contactsService).toBe(true);
  });

});
