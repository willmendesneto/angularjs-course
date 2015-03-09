/**
 * @ngdoc function
 * @name angularjsCourseApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the angularjsCourseApp
 */
(function() {
  'use strict';

  function ContactsCtrl($scope, $location, ContactsService) {

    this.contact = [];

    this.reset = function() {
      this.contact = [
        {
          name: '',
          address: '',
          phone: ''
        }
      ];
    };

    this.create = function(contact){
      this.listContacts = ContactsService.create(contact);
      this.reset();
      $location.path('/contacts');
    };

    this.init = function(){
      this.listContacts = this.filteredData = ContactsService.getListItems();
    };

    this.init();

  }

  angular.module('angularjsCourseApp')
    .controller('ContactsCtrl', ContactsCtrl);

  ContactsCtrl.$inject = ['$scope', '$location', 'ContactsService'];

}());
