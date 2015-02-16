'use strict';

/**
 * @ngdoc function
 * @name projectsShowcaseApp.controller:ProjectDetailsCtrl
 * @description
 * # ProjectdetailsCtrl
 * Controller of the projectsShowcaseApp
 */
angular.module('projectsShowcaseApp')
  .controller('ProjectDetailsCtrl', function ($scope, $state, $stateParams, moment, projectsHelper, projects) {
    $scope.projects = projects;
    $scope.projectsHelper = projectsHelper;
    $scope.defaultProject = {
      total_steps: 1,
      current_step: 0,
      active: false
    };

    $scope.cancelEdit   = cancelEdit;
    $scope.edit         = editProject;
    $scope.save         = save;

    var id = $stateParams.id;
    if (id === 'new') {
      $scope.project = $scope.defaultProject;
      $scope.isEditing = true;
    } else {
      $scope.project  = _.findWhere($scope.projects, {id: +id});
      $scope.previous = _.at($scope.projects, $scope.projects.indexOf($scope.project) - 1)[0];
      $scope.next     = _.at($scope.projects, $scope.projects.indexOf($scope.project) + 1)[0];
      convertDates();
    }

    function editProject() {
      $scope.originalProject = _.clone($scope.project);
      $scope.isEditing = true;
    }

    function cancelEdit() {
      if (isNew()) {
        $state.go('projects.list');
      } else {
        $scope.project = $scope.originalProject;
        $scope.isEditing = false;
      }
    }

    function convertDates() {
      $scope.project.start_date = projectsHelper.convertDate($scope.project.start_date);
      $scope.project.end_date = projectsHelper.convertDate($scope.project.end_date);
    }

    function isNew() {
      return !$scope.project.id;
    }

    function save(form) {
      if (!form.$valid) return;
      !_.find($scope.projects, $scope.project) && $scope.projects.push($scope.project);
      $scope.originalProject = $scope.defaultProject;
      convertDates();
      $scope.isEditing = false;
    }

  });
