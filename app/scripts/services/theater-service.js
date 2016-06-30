'use strict';

/**
 * @ngdoc service
 * @name cinemaBuddyClientApp.theaterService
 * @description
 * # theaterService
 * Factory in the cinemaBuddyClientApp.
 */
angular.module('cinemaBuddyClientApp')
  .factory('theaterService', function ($http, API_PATH) {
    
    function add (item) {
      return $http.put(API_PATH + '/theater/add',
                item);
    }
    
    
    // Public API here
    return {
      add: add
    };
  });
