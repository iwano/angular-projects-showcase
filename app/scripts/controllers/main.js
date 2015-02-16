'use strict';

/**
 * @ngdoc function
 * @name projectsShowcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsShowcaseApp
 */
angular.module('projectsShowcaseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
