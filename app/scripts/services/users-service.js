'use strict';

/**
 * @ngdoc service
 * @name cinemaBuddyClientApp.usersService
 * @description
 * # usersService
 * Factory in the cinemaBuddyClientApp.
 */
angular.module('cinemaBuddyClientApp')
  .factory('usersService', function () {
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
