/**
 * @ngdoc service
 * @name angularjsCourseApp.contactsService
 * @description
 * # contactsService
 * Service in the angularjsCourseApp.
 */
(function() {
  'use strict';

  function ContactsService(ngOfflineModel, listContacts) {

    var params = {
      key: 'listContacts',
      primaryKey: '_id',
      fields: ['_id', 'name' , 'address' , 'phone']
    };

    var Contacts = ngOfflineModel.setStorageType('localStorage')
                .init(listContacts, params);

    return Contacts;
  }

  angular.module('angularjsCourseApp')
    .service('ContactsService', ContactsService);

  ContactsService.$inject = ['ngOfflineModel', 'listContacts'];

}());


