/**
 * @ngdoc function
 * @name angularjsCourseApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the angularjsCourseApp
 */
(function() {
  'use strict';

  function NavbarCtrl($scope, $location) {
    this.isActive = function(path){
      var currentPath = $location.path().split('/')[1];
      if (currentPath.indexOf('?') !== -1) {
        currentPath = currentPath.split('?')[0];
      }
      return currentPath === path.split('/')[1];
    };
  }

  angular.module('angularjsCourseApp')
    .controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ['$scope', '$location'];

}());
