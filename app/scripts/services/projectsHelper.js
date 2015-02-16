'use strict';

/**
 * @ngdoc service
 * @name projectsShowcaseApp.projectsHelper
 * @description
 * # projectsHelper
 * Service in the projectsShowcaseApp.
 */
angular.module('projectsShowcaseApp')
  .service('projectsHelper', function (moment) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.calculateProgress = calculateProgress;
    this.hasProjectStarted = hasProjectStarted;
    this.ownerImage        = ownerImage;
    this.convertDate       = convertDate;
    this.beautifyDate       = beautifyDate;

    function calculateProgress(project) {
      return (project.current_step * 100 / project.total_steps) + '%';
    }

    function hasProjectStarted(project) {
      return project.current_step > 0 && project.total_steps > 0;
    }

    function ownerImage(project) {
      return   project.image || 'images/avatar.svg';
    }

    function convertDate(date) {
      return isNaN(date) ? moment(date, 'DD/MM/YYYY').format('DD/MM/YYYY') : moment(date).format('DD/MM/YYYY');
    }

    function beautifyDate(date) {
      return isNaN(date) ? moment(date, 'DD/MM/YYYY').format('MMM DD, YYYY') : moment(date).format('MMM DD, YYYY');
    }
  });
