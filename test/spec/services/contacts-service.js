'use strict';

describe('Service: ContactsService', function () {

  // load the service's module
  beforeEach(module('angularjsCourseApp'));

  // instantiate service
  var ContactsService,
      myMock
  ;
  beforeEach(inject(function (_ContactsService_, _listContacts_) {
    ContactsService = _ContactsService_;
    myMock = _listContacts_;
  }));

  it('Testing initial informations', function () {
    expect(typeof ContactsService.setListItems(myMock) === 'object').toBe(true);
    expect(ContactsService.getListItems().length).toEqual(6);
  });

  it('#delete', function(){
    var items = ContactsService.delete(1);
    expect(typeof items === 'object').toBe(true);

    expect(items._id).toBe(myMock[0]._id);
    expect(items.name).toBe(myMock[0].name);
    expect(items.address).toBe(myMock[0].address);
    expect(items.phone).toBe(myMock[0].phone);

    expect(ContactsService.delete(5000)).toBe(false);
  });

});

