'use strict';

/**
 * @ngdoc directive
 * @name cinemaBuddyClientApp.directive:cinemaFooter
 * @description
 * # cinemaFooter
 */
angular.module('cinemaBuddyClientApp')
  .directive('cinemaFooter', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {}
    };
  });
