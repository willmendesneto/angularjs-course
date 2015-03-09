/**
 * @ngdoc function
 * @name angularjsCourseApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the angularjsCourseApp
 */
(function() {
  'use strict';

  function ContactsCtrl($scope, ContactsService) {

    this.init = function(){
      this.listContacts = this.filteredData = ContactsService.getListItems();
    };

    this.init();

  }

  angular.module('angularjsCourseApp')
    .controller('ContactsCtrl', ContactsCtrl);

  ContactsCtrl.$inject = ['$scope', 'ContactsService'];

}());
