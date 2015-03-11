/**
 * @ngdoc directive
 * @name angularjsCourseApp.directive:navbar
 * @description
 * # navbar
 */
(function() {
  'use strict';

  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: '/views/directives/navbar.tpl.html',
      controller: 'NavbarCtrl',
      controllerAs: 'navbarCtrl',
    };

    return directive;
  }

  angular.module('angularjsCourseApp')
    .directive('navbar', navbar);

}());
