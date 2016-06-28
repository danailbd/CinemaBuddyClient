'use strict';

/**
 * @ngdoc service
 * @name cinemaBuddyClientApp.theaterService
 * @description
 * # theaterService
 * Factory in the cinemaBuddyClientApp.
 */
angular.module('cinemaBuddyClientApp')
  .factory('theaterService', function () {
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
