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
    'ngRoute',
    'ngTouch'
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