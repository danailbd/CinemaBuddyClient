'use strict';

/**
 * @ngdoc directive
 * @name cinemaBuddyClientApp.directive:cinemaHeader
 * @description
 * # cinemaHeader
 */
angular.module('cinemaBuddyClientApp')
  .directive('cinemaHeader', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
      controller: function ($scope, $location) {
        $scope.showHeader = function () {
          return $location.$$path !== '/login';
        }
      }
    };
  });
