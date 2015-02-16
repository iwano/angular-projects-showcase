'use strict';

/**
 * @ngdoc function
 * @name projectsShowcaseApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the projectsShowcaseApp
 */
angular.module('projectsShowcaseApp')
  .controller('ProjectsCtrl', function ($scope, projectsHelper, projects) {
    $scope.projects = projects;
    $scope.projectsHelper = projectsHelper;

  });
