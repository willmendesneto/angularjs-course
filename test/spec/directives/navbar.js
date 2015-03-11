// navbar.spec.js
describe('Directive: navbar', function () {
  'use strict';

  var element,
    template,
    httpBackend,
    rootScope,
    scope;

  // load the directive's module
  beforeEach(module('angularjsCourseApp'));

  beforeEach(inject(function ($rootScope, $compile, _$httpBackend_) {
    rootScope = $rootScope;
    scope = rootScope.$new();
    httpBackend = _$httpBackend_;

    template = '<div class="header">' +
      '<ul class="nav nav-pills pull-right">' +
      '  <li ng-class="{active:navbarCtrl.isActive(\'#/contacts\')}"><a ng-href="/#/contacts">Contacts</a></li>' +
      '  <li ng-class="{active:navbarCtrl.isActive(\'#/chart\')}"><a ng-href="/#/chart">Contacts</a></li>' +
      '</ul>' +
      '<h3 class="text-muted">NAVBAR</h3>' +
    '</div>';
    httpBackend.whenGET('/navbar.tpl.html').respond(template);

    element = angular.element(template);
    element = $compile(element)(scope);

  }));

  it('should create a navbar header with ".header" class in element', function () {
    expect(element.hasClass('header')).toBeTruthy();
  });

  it('should set "ng-scope" class in template', function () {
    expect(element.hasClass('ng-scope')).toBeTruthy();
  });

});
