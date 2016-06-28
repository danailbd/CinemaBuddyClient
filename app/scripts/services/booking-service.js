'use strict';

/**
 * @ngdoc service
 * @name cinemaBuddyClientApp.bookingService
 * @description
 * # bookingService
 * Factory in the cinemaBuddyClientApp.
 */
angular.module('cinemaBuddyClientApp')
  .factory('bookingService', function ($http, API_PATH) {
    // Service logic
    // ...

    function getProjections() {
      return $http.post(API_PATH + '/projections',
                        credentials);
    }
    
    // Public API here
    return {
      getProjections: getProjections
    };
  });
