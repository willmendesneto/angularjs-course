'use strict';

/**
 * @ngdoc function
 * @name angularjsCourseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsCourseApp
 */
angular.module('angularjsCourseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
