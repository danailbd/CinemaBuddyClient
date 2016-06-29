'use strict';

/**
 * @ngdoc function
 * @name cinemaBuddyClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cinemaBuddyClientApp
 */
angular.module('cinemaBuddyClientApp')
       .controller('LoginCtrl', function ($rootScope, $scope, EVENTS, OAuth) {
         $scope.username = null;
         $scope.password = null;

         $scope.logIn = function () {
           OAuth.getAccessToken({
                                  username: $scope.username,
                                  password: $scope.password
                                })
             .then(function () {
                $rootScope.$emit(EVENTS.loginSuccess);
             });
         }
       });
