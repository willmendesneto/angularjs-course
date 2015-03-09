/**
 * @ngdoc function
 * @name angularjsCourseApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the angularjsCourseApp
 */
(function() {
  'use strict';

  function ContactsCtrl($scope, listContacts) {

    this.init = function(){
      this.listContacts = listContacts;
    };

    this.init();

  }

  angular.module('angularjsCourseApp')
    .controller('ContactsCtrl', ContactsCtrl);

  ContactsCtrl.$inject = ['$scope', 'listContacts'];

}());
