/**
 * @ngdoc function
 * @name angularjsCourseApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the angularjsCourseApp
 */
(function() {
  'use strict';

  function ContactsCtrl($scope, $location, $window, $routeParams, $route, $filter, ContactsService) {

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
    };

    this.edit = function(){
      var id = $routeParams.id;
      this.contact = $filter('filter')(this.listContacts, {_id: id})[0];
      if (this.contactExists()) {
        $window.scrollTo(0, 0);
      } else {
        $location.path('/contacts/new');
      }
    };

    this.contactExists = function(){
      return typeof this.contact !== 'undefined';
    };

    this.update = function( item ) {
      this.listContacts = ContactsService.update(item);
    };

    this.save = function(item){
      if(typeof item._id !== 'undefined'){
        this.update(item);
      } else {
        this.create(item);
      }
      this.reset();
      $location.path('/contacts');
    };

    this.delete = function( index, confirmation ){
      confirmation = (typeof confirmation !== 'undefined') ? confirmation : true;
      if (confirmDelete(confirmation)) {
        var message,
            item = ContactsService.delete(index)
          ;

        if (!!item) {
          this.listContacts = ContactsService.getListItems();
          return true;
        }
        return false;
      }
    };

    var confirmDelete = function(confirmation){
      return confirmation ? $window.confirm('This action is irreversible. Do you want to delete this contact?') : true;
    };

    this.init = function(){
      this.listContacts = this.filteredData = ContactsService.getListItems();
      this.reset();
      //  Calling routeParam method
      if ($route.current.method !== undefined) {
        this[$route.current.method]();
      }
    };

    this.init();

  }

  angular.module('angularjsCourseApp')
    .controller('ContactsCtrl', ContactsCtrl);

  ContactsCtrl.$inject = ['$scope', '$location', '$window', '$routeParams', '$route', '$filter', 'ContactsService'];

}());
