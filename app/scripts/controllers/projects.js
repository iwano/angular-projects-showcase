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
    $scope.filter = {
      filter:         '',
      orderBy:        'id',
      orderDirection: false
    };

    $scope.sortingIndicatorAsc = function(orderBy) {
      return this.filter.orderBy === orderBy && this.filter.orderDirection === false
    };

    $scope.sortingIndicatorDesc = function(orderBy) {
      return this.filter.orderBy === orderBy && this.filter.orderDirection === true
    };

    $scope.sortProjects = sortProjects;

    function sortProjects(sorter) {
      if ($scope.filter.orderBy === sorter) {
        $scope.filter.orderDirection = !this.filter.orderDirection;
      } else {
        $scope.filter.orderBy = sorter;
        $scope.filter.orderDirection = false;
      }
    }

  });
