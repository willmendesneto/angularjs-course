'use strict';

describe('Service: listContacts', function () {

  // load the service's module
  beforeEach(module('angularjsCourseApp'));

  // instantiate service
  var listContacts;
  beforeEach(inject(function (_listContacts_) {
    listContacts = _listContacts_;
  }));

  it('should do something', function () {
    expect(!!listContacts).toBe(true);
  });

});
