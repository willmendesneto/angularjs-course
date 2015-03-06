'use strict';

/**
 * @ngdoc function
 * @name angularjsCourseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsCourseApp
 */
angular.module('angularjsCourseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
