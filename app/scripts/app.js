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
    'ui.router'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
