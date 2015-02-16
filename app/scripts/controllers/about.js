'use strict';

/**
 * @ngdoc function
 * @name projectsShowcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectsShowcaseApp
 */
angular.module('projectsShowcaseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
