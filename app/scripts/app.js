'use strict';

/**
 * @ngdoc overview
 * @name projectsShowcaseApp
 * @description
 * # projectsShowcaseApp
 *
 * Main module of the application.
 */

angular
  .module('projectsShowcaseApp', [
    'angularMoment',
    'angular-datepicker',
    'ngTouch',
    'ui.router',
    'angular-lodash'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/projects');

    $stateProvider
      .state('projects', {
        abstract: true,
        url: '/projects',
        template: '<ui-view/>',
        resolve: {
          projects: function (projectsFixtures) {
            return projectsFixtures;
          }
        }
      })
      .state('projects.list', {
        url: '',
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .state('projects.details', {
        url: '/:id',
        templateUrl: 'views/project_details.html',
        controller: 'ProjectDetailsCtrl'
      })
      .state('projects.new', {
        url: '/new',
        templateUrl: 'views/project_details.html',
        controller: 'ProjectDetailsCtrl'
      });
  });
