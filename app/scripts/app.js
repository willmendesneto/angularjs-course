'use strict';

/**
 * @ngdoc overview
 * @name angularjsCourseApp
 * @description
 * # angularjsCourseApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsCourseApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'keepr.ngOfflineModel',
    'keepr'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contacts', {
        templateUrl: 'views/index.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contactsCtrl'
      })
      .when('/contacts/new', {
        templateUrl: 'views/new.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contactsCtrl'
      })
      .otherwise({
        redirectTo: '/contacts'
      });
  });
