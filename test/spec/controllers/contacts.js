'use strict';

describe('Controller: ContactsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsCourseApp'));

  var ContactsCtrl,
    opts,
    route,
    routeParams,
    controller,
    listContactsKey,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $route, $routeParams, $filter, _listContacts_) {
    listContactsKey = 0;
    route = $route;
    controller = $controller;
    routeParams = $routeParams;
    opts = {
      contact: [
        {
          name: '',
          address: '',
          phone: ''
        }
      ],
      listContacts: _listContacts_,
      filter: $filter
    };
    scope = $rootScope.$new();

    route = {
      current: {
        method: undefined
      }
    };

    ContactsCtrl = $controller('ContactsCtrl', {
      $scope: scope,
      $routeParams: routeParams,
      $route: route,
      $filter: opts.filter,
      listContacts: opts.listContacts
    });
  }));

  it('#reset', function () {
    ContactsCtrl.contact = opts.contact[listContactsKey];
    expect(ContactsCtrl.contact.name).toBe(opts.contact[listContactsKey].name);
    expect(ContactsCtrl.contact.address).toBe(opts.contact[listContactsKey].address);
    expect(ContactsCtrl.contact.phone).toBe(opts.contact[listContactsKey].phone);

    ContactsCtrl.reset();

    expect(ContactsCtrl.contact[listContactsKey].name).toBe('');
    expect(ContactsCtrl.contact[listContactsKey].address).toBe('');
    expect(ContactsCtrl.contact[listContactsKey].phone).toBe('');
  });
  it('#create', function () {
    ContactsCtrl.contact = opts.contact;
    var listcontacthLength = ContactsCtrl.listContacts.length;
    expect(ContactsCtrl.listContacts.length).toBe(listcontacthLength);

    ContactsCtrl.create(opts.contact[listContactsKey]);
    expect(ContactsCtrl.listContacts.length).toBe(listcontacthLength + 1);
    ContactsCtrl.delete(7, false);
  });

  it('#edit', function () {
    routeParams.id = 1;
    route.current.method = 'edit';

    ContactsCtrl = controller('ContactsCtrl', {
      $scope: scope,
      $route: route,
      $filter: opts.filter,
      $routeParams: routeParams,
      listContacts: opts.listContacts
    });

    ContactsCtrl.edit();
    expect(ContactsCtrl.contact.name).toBe(opts.listContacts[listContactsKey].name);
    expect(ContactsCtrl.contact.phone).toBe(opts.listContacts[listContactsKey].phone);
    expect(ContactsCtrl.contact.address).toBe(opts.listContacts[listContactsKey].address);
  });

  it('#update', function () {
    routeParams.id = 1;
    route.current.method = 'edit';

    ContactsCtrl = controller('ContactsCtrl', {
      $scope: scope,
      $route: route,
      $filter: opts.filter,
      $routeParams: routeParams,
      listContacts: opts.listContacts
    });

    ContactsCtrl.edit();

    var nameMock = 'Username test',
        addressMock = 'User address',
        phoneMock = 'User phone'
    ;

    ContactsCtrl.contact.name = nameMock;
    ContactsCtrl.contact.phone = phoneMock;
    ContactsCtrl.contact.address = addressMock;

    ContactsCtrl.update(listContactsKey+1);

    expect(ContactsCtrl.listContacts[listContactsKey].name).toBe(nameMock);
    expect(ContactsCtrl.listContacts[listContactsKey].address).toBe(addressMock);
    expect(ContactsCtrl.listContacts[listContactsKey].phone).toBe(phoneMock);

    expect(ContactsCtrl.contact.name).toBe(nameMock);
    expect(ContactsCtrl.contact.address).toBe(addressMock);
    expect(ContactsCtrl.contact.phone).toBe(phoneMock);

    ContactsCtrl.contact.name = 'Allan Benjamin';
    ContactsCtrl.contact.phone = '557188339933';
    ContactsCtrl.contact.address = 'St. Claire Avenue, Nº 101';

    ContactsCtrl.update(listContactsKey+1);
  });

  it('#delete', function () {
    var listLength = ContactsCtrl.listContacts.length;
    var returnDelete = ContactsCtrl.delete(ContactsCtrl.listContacts.length - 1, false);
    expect(returnDelete).toBe(true);

    expect(typeof ContactsCtrl.listContacts[listLength] === 'undefined').toBe(true);
    expect(ContactsCtrl.listContacts.length !== listLength).toBe(true);

  });

});

