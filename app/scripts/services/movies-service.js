'use strict';

/**
 * @ngdoc service
 * @name cinemaBuddyClientApp.moviesService
 * @description
 * # moviesService
 * Factory in the cinemaBuddyClientApp.
 */
angular.module('cinemaBuddyClientApp')
  .factory('moviesService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
