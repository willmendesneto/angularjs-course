/**
 * @ngdoc function
 * @name angularjsCourseApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the angularjsCourseApp
 */
(function() {
  'use strict';

  function ChartCtrl($scope, listChart){

    // Options
    this.show = null;
    this.descriptionItem = 0;

    this.width = 800;
    this.height = 350;
    this.yAxis = 'Sales';
    this.xAxis = '2014';
    this.yHeader = 'value';
    // Data
    this.data = listChart.data;
    this.data2 = listChart.data2;

    // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
    this.max = 0;

    var arrLength = this.data.length;
    for (var i = 0; i < arrLength; i++) {
      // Find Maximum X Axis Value
      if (this.data[i].value > this.max){
        this.max = this.data[i].value;
      }
    }

    var yAxisHeadersSort = function (first, second) {
      return parseInt(first.value) - parseInt(second.value);
    };

    this.yAxisHeaders = this.data.sort(yAxisHeadersSort);

    this.numbers = [];
    var j = 0;
    while(j < this.max){
      this.numbers.push(j);
      j += 50;
    }
    this.numbers.push(this.max);
  }

  angular.module('angularjsCourseApp')
    .controller('ChartCtrl', ChartCtrl);

  ChartCtrl.$inject = ['$scope', 'listChart'];

}());

