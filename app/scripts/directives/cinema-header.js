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
           restrict   : 'E',
           controller : function ($scope, $location, USER_ROLES, AuthService) {
             $scope.showHeader = function () {
               return $location.$$path !== '/login';
             };

             $scope.isAdminUser = AuthService.isAtRole
                                             .bind(AuthService,
                                                   USER_ROLES.admin);
           }
         };
       });
